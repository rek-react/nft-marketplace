import { Test, TestingModule } from '@nestjs/testing';
import { v4 } from 'uuid';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { NonceResponseDto } from './dto/nonce-response.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { WalletEntity } from 'src/wallet/entities/wallet.entity';
import { ConnectWalletDto } from 'src/wallet/dto/connect-wallet.dto';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { generateNonce } from 'siwe';

const nonce = generateNonce();

const nonceResponseDto: NonceResponseDto = {
  nonce,
};

const user: UserEntity = {
  id: v4(),
  createdAt: new Date(),
  username: 'test',
  wallets: [],
  updatedAt: new Date(),
  avatarName: 'avatar_1.png',
};

const wallet: WalletEntity = {
  id: v4(),
  address: '0x5h34',
  chainId: 1,
  isActive: true,
  user,
  userId: user.id,
  createdAt: new Date(),
};

const connectWalletDto: ConnectWalletDto = {
  message: 'test-message',
  signature: 'test-signature',
};

const userResponseDto: UserResponseDto = {
  user,
  wallet,
};

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            getNonce: jest.fn().mockReturnValue(nonce),
            connectWallet: jest.fn().mockResolvedValue(userResponseDto),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('nonce', () => {
    it('should generate and get nonce', async () => {
      const req = {
        session: {
          nonce: undefined,
        },
      } as unknown as Request;

      const result = await controller.nonce(req);
      expect(req.session.nonce).toBe(nonce);
      expect(result).toEqual(nonceResponseDto);
    });
  });

  describe('connectWallet', () => {
    it('should connect wallet and login user', async () => {
      const req = {
        session: { nonce: nonce },
        logIn: jest.fn((user, callback) => callback(null)),
      } as unknown as Request;

      const result = await controller.connectWallet(connectWalletDto, req);

      expect(req.logIn).toHaveBeenCalledWith(user, expect.any(Function));
      expect(req.session.nonce).toBeUndefined();
      expect(result).toEqual(userResponseDto);
    });

    it('should throw if login fails', async () => {
      const req = {
        session: { nonce: nonce },
        logIn: jest.fn((user, callback) => callback(new Error('fail'))),
      } as unknown as Request;

      await expect(
        controller.connectWallet(connectWalletDto, req),
      ).rejects.toThrow('Could not login user');
    });
  });

  describe('logout', () => {
    it('should logout', async () => {
      const req = {
        logOut: jest.fn((options, callback) => callback(null)),
      } as unknown as Request;

      const result = await controller.logout(req);
      expect(req.logOut).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should throw if logout fails', async () => {
      const req = {
        logOut: jest.fn((options, callback) => callback(new Error('fail'))),
      } as unknown as Request;

      await expect(controller.logout(req)).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(req.logOut).toHaveBeenCalled();
    });
  });
});
