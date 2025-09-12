import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const getTypeOrmOptions: (configService: ConfigService) => Promise<TypeOrmModuleOptions>;
