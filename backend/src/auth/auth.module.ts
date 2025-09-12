import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './session.serializer';
import { WalletModule } from 'src/wallet/wallet.module';
import { UserModule } from 'src/user/user.module';
import { UtilModule } from 'src/util/util.module';

@Module({
  imports: [WalletModule, UserModule, UtilModule],
  controllers: [AuthController],
  providers: [AuthService, SessionSerializer],
})
export class AuthModule {}
