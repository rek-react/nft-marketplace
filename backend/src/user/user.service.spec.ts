import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { v4 } from 'uuid';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserResponseDto } from 'src/common/dto/user-response.dto';

const user: UserEntity = {
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

const userWithWallet: UserEntity = {
  ...user,
  wallets: [wallet],
};

const userResponseDto: UserResponseDto = {
  user: userWithWallet,
  wallet,
};

describe('UserService', () => {
  let service: UserService;
  let userRepository: jest.Mocked<Repository<UserEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            create: jest.fn().mockReturnValue(user),
            save: jest.fn().mockResolvedValue(user),
            findOne: jest.fn().mockResolvedValue(user),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return user afrer successful creation', async () => {
      const newUser = await service.create();

      expect(userRepository.save).toHaveBeenCalledWith(newUser);
      expect(newUser).toEqual(user);
    });
  });

  describe('getMe', () => {
    it('should get and return user', async () => {
      const result = await service.getMe(userWithWallet);

      expect(result).toEqual(userResponseDto);
    });
  });

  describe('findOne', () => {
    it('should return user by one options', async () => {
      const foundUser = await service.findOne({ where: { id: user.id } });
      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { id: user.id },
      });
      expect(foundUser).toEqual(user);
    });
  });
});
