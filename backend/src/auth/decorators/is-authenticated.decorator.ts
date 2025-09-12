import { applyDecorators, UseGuards } from '@nestjs/common';
import { IsAuthenticatedGuard } from '../guards/is-authenticated.guard';

export const IsAuthenticated = () =>
  applyDecorators(UseGuards(IsAuthenticatedGuard));
