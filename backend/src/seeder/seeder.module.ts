import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieEntity } from 'src/categorie/entities/categorie.entity';
import { CategorieSeederService } from './category.seeder.service';
import { SeederService } from './seeder.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmOptions } from 'src/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmOptions,
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([CategorieEntity]),
  ],
  providers: [SeederService, CategorieSeederService],
})
export class SeederModule {}
