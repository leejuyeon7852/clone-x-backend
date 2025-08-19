import { Controller, Get } from '@nestjs/common';
import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
    constructor(private readonly feedService:FeedsService) {}

    @Get()
    getFeeds(){
        return this.feedService.getFeeds();
    }
}
