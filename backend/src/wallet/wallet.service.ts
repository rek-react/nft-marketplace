import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ethers } from 'ethers';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConnectWalletDto } from './dto/connect-wallet.dto';
import { UserService } from 'src/user/user.service';
import { WalletEntity } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,
    private readonly userService: UserService,
  ) {}

  async connect(address: string, chainId: number): Promise<WalletEntity> {
    const existingWallet = await this.walletRepository.findOne({
      where: { address },
    });

    if (existingWallet) return existingWallet;

    const user = await this.userService.create();

    const wallet = this.walletRepository.create({
      address,
      chainId,
      userId: user.id,
    });

    return this.walletRepository.save(wallet);
  }
}
