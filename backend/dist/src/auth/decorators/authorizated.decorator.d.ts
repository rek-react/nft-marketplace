import { UserEntity } from 'src/user/entities/user.entity';
export declare const Authorizated: (...dataOrPipes: (keyof UserEntity | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
