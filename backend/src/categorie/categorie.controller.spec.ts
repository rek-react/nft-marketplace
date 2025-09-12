import { Test, TestingModule } from '@nestjs/testing';
import { v4 } from 'uuid';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';
import { CategorieEntity } from './entities/categorie.entity';
import { CategoriesResponseDto } from './dto/category-response.dto';

const categorie: CategorieEntity = {
  id: v4(),
  title: 'Title',
  updatedAt: new Date(),
  createdAt: new Date(),
};

const categoriesResponseDto: CategoriesResponseDto = {
  categories: [categorie],
};

describe('CategorieController', () => {
  let controller: CategorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorieController],
      providers: [
        {
          provide: CategorieService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([categorie]),
          },
        },
      ],
    }).compile();

    controller = module.get<CategorieController>(CategorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get all categories', async () => {
      const result = await controller.findAll();
      expect(result).toEqual(categoriesResponseDto);
    });
  });
});
