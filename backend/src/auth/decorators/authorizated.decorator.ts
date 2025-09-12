import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserEntity } from 'src/user/entities/user.entity';

export const Authorizated = createParamDecorator(
  (
    data: keyof UserEntity,
    ctx: ExecutionContext,
  ): UserEntity | UserEntity[keyof UserEntity] => {
    const request = ctx.switchToHttp().getRequest() as Request;
    const user = request.user as UserEntity;
    return data ? user[data] : user;
  },
);
