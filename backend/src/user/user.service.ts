import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UserResponseDto } from 'src/common/dto/user-response.dto';

@Injectable()
export class UserService {
  private getRandomAvatar(): string {
    const randomNumber = Math.floor(Math.random() * 12) + 1; // 1–12
    return `avatar_${randomNumber}.png`;
  }

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(): Promise<UserEntity> {
    const avatarName = this.getRandomAvatar();

    const newUser = this.userRepository.create({
      avatarName,
    });

    return this.userRepository.save(newUser);
  }

  async getMe(user: UserEntity): Promise<UserResponseDto> {
    const wallet = user.wallets[0];

    return { user, wallet };
  }

  async findOne(
    oneOptions: FindOneOptions<UserEntity>,
  ): Promise<UserEntity | null> {
    return this.userRepository.findOne(oneOptions);
  }
}
