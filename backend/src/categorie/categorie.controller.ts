import { Controller, Get } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategoriesResponseDto } from './dto/category-response.dto';

@Controller('categories')
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @Get()
  async findAll(): Promise<CategoriesResponseDto> {
    const categories = await this.categorieService.findAll();
    return {
      categories,
    };
  }
}
