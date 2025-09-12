import { SubscribeService } from './subscribe.service';
import { SubscribeDto } from './dto/subscribe.dto';
export declare class SubscribeController {
    private readonly subscribeService;
    constructor(subscribeService: SubscribeService);
    subscribe(dto: SubscribeDto): Promise<boolean>;
}
