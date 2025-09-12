import { CategorieService } from './categorie.service';
import { CategoriesResponseDto } from './dto/category-response.dto';
export declare class CategorieController {
    private readonly categorieService;
    constructor(categorieService: CategorieService);
    findAll(): Promise<CategoriesResponseDto>;
}
