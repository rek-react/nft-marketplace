import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { WalletEntity } from './entities/wallet.entity';
export declare class WalletService {
    private readonly walletRepository;
    private readonly userService;
    constructor(walletRepository: Repository<WalletEntity>, userService: UserService);
    connect(address: string, chainId: number): Promise<WalletEntity>;
}
