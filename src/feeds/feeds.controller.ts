import { Controller, Get, UseGuards, Post, Body, Req, Delete, Param} from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { CreateFeedDto } from './dto/create-feed.dto';

@UseGuards(JwtAuthGuard)
@Controller('feeds')
export class FeedsController {
    constructor(private readonly feedService:FeedsService) {}

    @Get()
    getFeeds(){
        return this.feedService.getFeedWithUsers();
    }

    @Post()
    createdFeed(@Body() feed:CreateFeedDto, @Req() request:Request & {user: {id:number}}, )
    {
        const userId = request.user.id;
        return this.feedService.createdFeed({...feed}, userId);
    }

    @Delete(':id')
    deleteFeed(@Param('id') id:number){
        return this.feedService.deleteFeed(id);
    }
}
