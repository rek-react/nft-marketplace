import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletService } from './wallet.service';
import { WalletEntity } from './entities/wallet.entity';
import { UserService } from 'src/user/user.service';
import { v4 } from 'uuid';

const user = {
  id: v4(),
  createdAt: new Date(),
  username: 'test',
  wallets: [],
  updatedAt: new Date(),
  avatarName: 'avatar_1.png',
};

const wallet = {
  id: v4(),
  address: '0x5h34',
  chainId: 1,
  isActive: true,
  user,
  userId: user.id,
  createdAt: new Date(),
};

describe('WalletService', () => {
  let service: WalletService;
  let walletRepository: jest.Mocked<Repository<WalletEntity>>;
  let userService: jest.Mocked<UserService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletService,
        {
          provide: getRepositoryToken(WalletEntity),
          useValue: {
            create: jest.fn().mockResolvedValue(wallet),
            save: jest.fn().mockResolvedValue(wallet),
            findOne: jest.fn().mockResolvedValue(null),
          },
        },
        {
          provide: UserService,
          useValue: {
            create: jest.fn().mockResolvedValue(user),
          },
        },
      ],
    }).compile();

    service = module.get<WalletService>(WalletService);
    walletRepository = module.get(getRepositoryToken(WalletEntity));
    userService = module.get(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('connect', () => {
    it('should return existing wallet if it exists', async () => {
      walletRepository.findOne.mockResolvedValue(wallet);

      const result = await service.connect(wallet.address, wallet.chainId);

      expect(walletRepository.findOne).toHaveBeenCalledWith({
        where: { address: wallet.address },
      });
      expect(result).toEqual(wallet);
    });

    it('should create and save a new wallet if it does not exist', async () => {
      const result = await service.connect(wallet.address, wallet.chainId);

      expect(walletRepository.findOne).toHaveBeenCalledWith({
        where: { address: wallet.address },
      });
      expect(userService.create).toHaveBeenCalled();
      expect(walletRepository.create).toHaveBeenCalledWith({
        address: wallet.address,
        chainId: wallet.chainId,
        userId: user.id,
      });
      expect(walletRepository.save).toHaveBeenCalled();
      expect(result).toEqual(wallet);
    });
  });
});
