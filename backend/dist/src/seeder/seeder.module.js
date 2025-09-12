"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categorie_entity_1 = require("../categorie/entities/categorie.entity");
const category_seeder_service_1 = require("./category.seeder.service");
const seeder_service_1 = require("./seeder.service");
const config_1 = require("@nestjs/config");
const typeorm_config_1 = require("../config/typeorm.config");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: typeorm_config_1.getTypeOrmOptions,
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([categorie_entity_1.CategorieEntity]),
        ],
        providers: [seeder_service_1.SeederService, category_seeder_service_1.CategorieSeederService],
    })
], SeederModule);
//# sourceMappingURL=seeder.module.js.map