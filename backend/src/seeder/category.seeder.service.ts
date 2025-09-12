import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieEntity } from 'src/categorie/entities/categorie.entity';
import { Repository } from 'typeorm';

const categories: Pick<CategorieEntity, 'title'>[] = [
  {
    title: 'Art',
  },
  {
    title: 'Collectibles',
  },
  {
    title: 'Music',
  },
  {
    title: 'Photography',
  },
  {
    title: 'Video',
  },
  {
    title: 'Utility',
  },
  {
    title: 'Sport',
  },
  {
    title: 'Virtual Worlds',
  },
];

@Injectable()
export class CategorieSeederService {
  constructor(
    @InjectRepository(CategorieEntity)
    private categoryRepository: Repository<CategorieEntity>,
  ) {}

  async create(): Promise<boolean> {
    for (const category of categories) {
      const existsCategory = await this.categoryRepository.findOneBy({
        title: category.title,
      });
      if (!existsCategory) {
        const newCategory = this.categoryRepository.create({
          title: category.title,
        });
        await this.categoryRepository.save(newCategory);
      }
    }
    return true;
  }
}
