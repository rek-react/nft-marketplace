import { ConfigService } from '@nestjs/config';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
import { UserService } from 'src/user/user.service';
import { DomainUtilService } from 'src/util/domain.util.service';
import { ConnectWalletDto } from 'src/wallet/dto/connect-wallet.dto';
import { WalletService } from 'src/wallet/wallet.service';
export declare class AuthService {
    private readonly walletService;
    private readonly userService;
    private readonly configService;
    private readonly domainUtilService;
    constructor(walletService: WalletService, userService: UserService, configService: ConfigService, domainUtilService: DomainUtilService);
    getNonce(): string;
    connectWallet(dto: ConnectWalletDto, expectedNonce?: string): Promise<UserResponseDto>;
}
