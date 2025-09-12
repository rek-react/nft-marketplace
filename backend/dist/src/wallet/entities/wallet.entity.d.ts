import { UserEntity } from 'src/user/entities/user.entity';
export declare class WalletEntity {
    id: string;
    address: string;
    chainId: number;
    isActive: boolean;
    userId: string;
    user: UserEntity;
    createdAt: Date;
}
