import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { DomainUtilService } from 'src/util/domain.util.service';
import { ConfigService } from '@nestjs/config';
import { ConnectWalletDto } from 'src/wallet/dto/connect-wallet.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import { WalletEntity } from 'src/wallet/entities/wallet.entity';
import * as ethers from 'ethers';
import { generateNonce, SiweMessage } from 'siwe';

const nonce = generateNonce();

const user: UserEntity = {
  id: 'user-id',
  username: 'test',
  createdAt: new Date(),
  updatedAt: new Date(),
  avatarName: 'avatar.png',
  wallets: [],
};

const wallet: WalletEntity = {
  id: 'wallet-id',
  address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
  chainId: 1,
  isActive: true,
  createdAt: new Date(),
  user,
  userId: user.id,
};

const message = new SiweMessage({
  domain: 'example.com',
  address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
  statement: 'Sign in with Ethereum to the app.',
  uri: 'https://example.com',
  version: '1',
  chainId: 1,
  nonce,
}).toMessage();

const dto: ConnectWalletDto = {
  message,
  signature: 'signature',
};

describe('AuthService', () => {
  let service: AuthService;
  let walletService: jest.Mocked<WalletService>;
  let userService: jest.Mocked<UserService>;
  let domainUtilService: jest.Mocked<DomainUtilService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: WalletService,
          useValue: {
            connect: jest.fn().mockResolvedValue(wallet),
          },
        },
        {
          provide: UserService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(user),
          },
        },
        {
          provide: DomainUtilService,
          useValue: {
            extractDomain: jest.fn().mockReturnValue('example.com'),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            getOrThrow: jest.fn().mockReturnValue('http://example.com'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    walletService = module.get(WalletService);
    userService = module.get(UserService);
    domainUtilService = module.get(DomainUtilService);

    jest.spyOn(ethers, 'verifyMessage').mockReturnValue(wallet.address);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('connectWallet', () => {
    it('should connect wallet and return user & wallet', async () => {
      const result = await service.connectWallet(dto, nonce);

      expect(domainUtilService.extractDomain).toHaveBeenCalledWith(
        'http://example.com',
      );
      expect(walletService.connect).toHaveBeenCalledWith(wallet.address, 1);
      expect(userService.findOne).toHaveBeenCalledWith({
        where: { id: wallet.userId },
      });
      expect(result).toEqual({ user, wallet });
    });

    it('should throw UnauthorizedException if nonce is missing', async () => {
      await expect(service.connectWallet(dto, '')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException if signature invalid', async () => {
      jest.spyOn(ethers, 'verifyMessage').mockReturnValue('');
      await expect(service.connectWallet(dto, nonce)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });
});
