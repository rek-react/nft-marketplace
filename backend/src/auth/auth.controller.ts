import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

import { IsAuthenticated } from './decorators/is-authenticated.decorator';
import { UserResponseDto } from 'src/common/dto/user-response.dto';
import { ConnectWalletDto } from 'src/wallet/dto/connect-wallet.dto';
import { NonceResponseDto } from './dto/nonce-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('nonce')
  async nonce(@Req() req: Request): Promise<NonceResponseDto> {
    const nonce = this.authService.getNonce();
    req.session.nonce = nonce;
    return { nonce };
  }

  @Post('connect-wallet')
  async connectWallet(
    @Body() dto: ConnectWalletDto,
    @Req() req: Request,
  ): Promise<UserResponseDto> {
    const nonce = req.session.nonce;

    const { user, wallet } = await this.authService.connectWallet(dto, nonce);

    const loginError = await new Promise((resolve) =>
      req.logIn(user, (error) => resolve(error)),
    );

    if (loginError) {
      throw new InternalServerErrorException('Could not login user');
    }

    delete req.session.nonce;

    return { user, wallet };
  }

  @IsAuthenticated()
  @Post('logout')
  async logout(@Req() req: Request): Promise<boolean> {
    const logoutError = await new Promise((resolve) =>
      req.logOut({}, (error) => resolve(error)),
    );

    if (logoutError) {
      throw new InternalServerErrorException('Could not log out user');
    }
    return true;
  }
}
