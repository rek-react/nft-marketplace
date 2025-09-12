import { AuthService } from './auth.service';
import { Request } from 'express';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
import { ConnectWalletDto } from 'src/wallet/dto/connect-wallet.dto';
import { NonceResponseDto } from './dto/nonce-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    nonce(req: Request): Promise<NonceResponseDto>;
    connectWallet(dto: ConnectWalletDto, req: Request): Promise<UserResponseDto>;
    logout(req: Request): Promise<boolean>;
}
