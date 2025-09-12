import { Module } from '@nestjs/common';
import { DomainUtilService } from './domain.util.service';

@Module({
  providers: [DomainUtilService],
  exports: [DomainUtilService],
})
export class UtilModule {}
