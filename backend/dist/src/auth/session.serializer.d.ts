import { PassportSerializer } from '@nestjs/passport';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class SessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: UserService);
    serializeUser(user: UserEntity, done: Function): void;
    deserializeUser(id: string, done: Function): Promise<any>;
}
