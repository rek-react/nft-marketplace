import { UserEntity } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
export declare class UserService {
    private userRepository;
    private getRandomAvatar;
    constructor(userRepository: Repository<UserEntity>);
    create(): Promise<UserEntity>;
    getMe(user: UserEntity): Promise<UserResponseDto>;
    findOne(oneOptions: FindOneOptions<UserEntity>): Promise<UserEntity | null>;
}
