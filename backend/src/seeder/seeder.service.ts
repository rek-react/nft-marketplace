import { Injectable } from '@nestjs/common';
import { CategorieSeederService } from './category.seeder.service';

@Injectable()
export class SeederService {
  constructor(private readonly categorieSeeder: CategorieSeederService) {}

  async seed(): Promise<void> {
    await this.categorieSeeder.create();
  }
}
