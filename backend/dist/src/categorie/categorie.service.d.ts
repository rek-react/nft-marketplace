import { CategorieEntity } from './entities/categorie.entity';
import { Repository } from 'typeorm';
export declare class CategorieService {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategorieEntity>);
    findAll(): Promise<CategorieEntity[]>;
}
