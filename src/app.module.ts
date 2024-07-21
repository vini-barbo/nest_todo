import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './modules/post/post.controller';
import { PostService } from './modules/post/post.service';
import { UserEntity } from './modules/user/user.entity';
import { PostEntity } from './modules/post/post.entity';

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
      entities: [UserEntity, PostEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, PostEntity]),
  ],
  controllers: [AppController, UserController, PostController],
  providers: [AppService, UserService, PostService],
})
export class AppModule {}
