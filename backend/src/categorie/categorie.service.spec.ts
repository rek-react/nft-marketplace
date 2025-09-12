import { Test, TestingModule } from '@nestjs/testing';
import { CategorieService } from './categorie.service';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { CategorieEntity } from './entities/categorie.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const categorie: CategorieEntity = {
  id: v4(),
  title: 'Title',
  updatedAt: new Date(),
  createdAt: new Date(),
};

describe('CategorieService', () => {
  let service: CategorieService;
  let categorieRepository: jest.Mocked<Repository<CategorieEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategorieService,
        {
          provide: getRepositoryToken(CategorieEntity),
          useValue: {
            find: jest.fn().mockReturnValue([categorie]),
          },
        },
      ],
    }).compile();

    service = module.get<CategorieService>(CategorieService);
    categorieRepository = module.get(getRepositoryToken(CategorieEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should get all categories', async () => {
      const categories = await service.findAll();
      expect(categories).toEqual([categorie]);
    });
  });
});
