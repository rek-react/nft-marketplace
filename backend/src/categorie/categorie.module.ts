import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieEntity } from './entities/categorie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategorieEntity])],
  controllers: [CategorieController],
  providers: [CategorieService],
})
export class CategorieModule {}
