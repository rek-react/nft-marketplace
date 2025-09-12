import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Authorizated } from 'src/auth/decorators/authorizated.decorator';
import { UserEntity } from './entities/user.entity';
import { IsAuthenticated } from 'src/auth/decorators/is-authenticated.decorator';
import { UserResponseDto } from 'src/common/dto/user-response.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsAuthenticated()
  @Get('me')
  async getMe(@Authorizated() user: UserEntity): Promise<UserResponseDto> {
    const result = await this.userService.getMe(user);
    return result;
  }
}
