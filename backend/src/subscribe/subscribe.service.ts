import { Injectable } from '@nestjs/common';
import { SubscribeDto } from './dto/subscribe.dto';

@Injectable()
export class SubscribeService {
  async subscribe(dto: SubscribeDto): Promise<boolean> {
    // There should be logic for adding email to a website or newsletter.
    return true;
  }
}
