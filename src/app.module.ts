import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeedsModule } from './feeds/feeds.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.64.190.152',
      port: 3306,
      username: 'admin',
      password: '5z,}L(,*',
      database: 'twitter',
      autoLoadEntities: true, //entity import 안해도 자동으로..?
      synchronize: false //코드가 바뀌면 db가 바뀌니까 false로 함 -> 조심해야함
    }),
    UsersModule, 
    FeedsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
