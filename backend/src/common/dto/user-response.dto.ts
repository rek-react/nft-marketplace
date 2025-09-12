import { UserEntity } from 'src/user/entities/user.entity';
import { WalletEntity } from 'src/wallet/entities/wallet.entity';

export class UserResponseDto {
  user: UserEntity;
  wallet: WalletEntity;
}
