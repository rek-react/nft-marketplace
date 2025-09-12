import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  serializeUser(user: UserEntity, done: Function) {
    done(null, user.id);
  }

  async deserializeUser(id: string, done: Function) {
    const user = await this.userService.findOne({
      where: {
        id,
      },
      relations: ['wallets'],
    });

    if (!user) return done(null, false);

    done(null, user);
  }
}
