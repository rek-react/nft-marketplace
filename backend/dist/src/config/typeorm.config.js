"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmOptions = void 0;
const getTypeOrmOptions = async (configService) => ({
    type: 'postgres',
    host: 'db',
    port: configService.getOrThrow('POSTGRES_PORT'),
    username: configService.getOrThrow('POSTGRES_USER'),
    password: configService.getOrThrow('POSTGRES_PASSWORD'),
    database: configService.getOrThrow('POSTGRES_DB'),
    autoLoadEntities: true,
    synchronize: true,
});
exports.getTypeOrmOptions = getTypeOrmOptions;
//# sourceMappingURL=typeorm.config.js.map