import { CategorieEntity } from 'src/categorie/entities/categorie.entity';
import { Repository } from 'typeorm';
export declare class CategorieSeederService {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategorieEntity>);
    create(): Promise<boolean>;
}
