import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verifyMessage } from 'ethers';
import { generateNonce, SiweMessage } from 'siwe';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { DomainUtilService } from 'src/util/domain.util.service';
import { ConnectWalletDto } from 'src/wallet/dto/connect-wallet.dto';
import { WalletEntity } from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly walletService: WalletService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly domainUtilService: DomainUtilService,
  ) {}

  getNonce() {
    return generateNonce();
  }

  async connectWallet(
    dto: ConnectWalletDto,
    expectedNonce?: string,
  ): Promise<UserResponseDto> {
    if (!expectedNonce)
      throw new UnauthorizedException('Missing session nonce');

    const siwe = new SiweMessage(dto.message);

    const domain = this.domainUtilService.extractDomain(
      this.configService.getOrThrow('CLIENT_URL'),
    );

    if (siwe.domain !== domain)
      throw new UnauthorizedException('Domain mismatch');
    if (siwe.nonce !== expectedNonce)
      throw new UnauthorizedException('Bad nonce');

    const now = new Date();
    if (siwe.notBefore && now < new Date(siwe.notBefore))
      throw new UnauthorizedException('Too early');
    if (siwe.expirationTime && now > new Date(siwe.expirationTime))
      throw new UnauthorizedException('Expired');

    const ok = verifyMessage(dto.message, dto.signature);
    if (!ok) throw new UnauthorizedException('Invalid signature (EOA)');

    const wallet = await this.walletService.connect(siwe.address, siwe.chainId);

    const user = await this.userService.findOne({
      where: {
        id: wallet.userId,
      },
    });

    if (!user)
      throw new UnauthorizedException('User not found for connected wallet');

    return {
      user,
      wallet,
    };
  }
}
