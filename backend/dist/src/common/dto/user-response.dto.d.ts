import { UserEntity } from 'src/user/entities/user.entity';
import { WalletEntity } from 'src/wallet/entities/wallet.entity';
export declare class UserResponseDto {
    user: UserEntity;
    wallet: WalletEntity;
}
