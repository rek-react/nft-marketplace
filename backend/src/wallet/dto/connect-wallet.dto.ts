import { IsEthereumAddress, IsString } from 'class-validator';

export class ConnectWalletDto {
  @IsString()
  signature: string;

  @IsString()
  message: string;
}
