import { CategorieSeederService } from './category.seeder.service';
export declare class SeederService {
    private readonly categorieSeeder;
    constructor(categorieSeeder: CategorieSeederService);
    seed(): Promise<void>;
}
