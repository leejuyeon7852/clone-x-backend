import { Module } from '@nestjs/common';
import { FeedsController } from './feeds.controller';
import { FeedsService } from './feeds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Feed } from './feed.entity';
import { User } from 'src/users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Feed, User]),
    JwtModule.register({
          secret: 'random-secret-key',
          signOptions: {expiresIn: '600m'},
    }),
  ],
  controllers: [FeedsController],
  providers: [FeedsService]
})
export class FeedsModule {}
