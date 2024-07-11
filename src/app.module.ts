import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageController } from './modules/page/page.controller';
import { PageService } from './modules/page/page.service';
import { UserEntity } from './modules/user/user.entity';
import { PageEntity } from './modules/page/page.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'chatbot',
      host: 'ep-noisy-base-a5oon3i1.us-east-2.aws.neon.tech',
      password: 'p3bQFXfcPdg0',
      port: 5432,
      username: 'chatbot_owner',
      ssl: true,
      entities: [UserEntity, PageEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, PageEntity]),
  ],
  controllers: [AppController, UserController, PageController],
  providers: [AppService, UserService, PageService],
})
export class AppModule {}
