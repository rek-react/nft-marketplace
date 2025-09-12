import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieEntity } from './entities/categorie.entity';
import { Repository } from 'typeorm';
import { CategoriesResponseDto } from './dto/category-response.dto';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(CategorieEntity)
    private categoryRepository: Repository<CategorieEntity>,
  ) {}

  async findAll(): Promise<CategorieEntity[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }
}
