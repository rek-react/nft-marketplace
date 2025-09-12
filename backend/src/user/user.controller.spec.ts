import { Test, TestingModule } from '@nestjs/testing';
import { v4 } from 'uuid';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
import { WalletEntity } from 'src/wallet/entities/wallet.entity';

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

const userResponseDto: UserResponseDto = {
  user,
  wallet,
};

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getMe: jest.fn().mockResolvedValue(userResponseDto),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMe', () => {
    it('should get and return user and wallet', async () => {
      const result = await controller.getMe(user);
      expect(result).toEqual(userResponseDto);
    });
  });
});
