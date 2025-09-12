import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMe(user: UserEntity): Promise<UserResponseDto>;
}
