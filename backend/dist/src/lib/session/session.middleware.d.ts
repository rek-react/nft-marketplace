import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare function setupSessionMiddleware(app: INestApplication, config: ConfigService): Promise<void>;
