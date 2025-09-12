import { WalletEntity } from 'src/wallet/entities/wallet.entity';
export declare class UserEntity {
    id: string;
    username?: string;
    avatarName: string;
    wallets: WalletEntity[];
    createdAt: Date;
    updatedAt: Date;
}
