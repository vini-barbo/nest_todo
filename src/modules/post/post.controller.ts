import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import type { IPostDTO } from './post.dto';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';

@Controller('Post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('findall')
  async findPost(): Promise<PostEntity[]> {
    return await this.postService.findPost();
  }

  @Get('findone')
  async findOnePost(@Body() postToBeFound: Partial<PostEntity>): Promise<PostEntity> {
    return await this.postService.findOnePost(postToBeFound);
  }

  @Get('findmany')
  async findManyPost(@Body() postToBeFound: Partial<PostEntity>): Promise<PostEntity[]> {
    return await this.postService.findManyPost(postToBeFound);
  }

  @Post('create')
  async savePost(@Body() postSent: IPostDTO): Promise<PostEntity> {

    const postToBeCreated: IPostDTO = {
      user_id: postSent.user_id,
      title: postSent.title,
      content: postSent.content,
    };

    return await this.postService.createPost(postToBeCreated);
  }

  @Delete('delete')
  async deletePost(@Body() id): Promise<String> {
  return await this.postService.deletePost(id.id);
  }

}
