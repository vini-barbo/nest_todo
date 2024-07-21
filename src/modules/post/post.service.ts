import { randomUUID, UUID } from 'crypto';
import { IPostDTO } from './post.dto';
import { Inject, Injectable } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async findPost(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }

  async findOnePost(postToBeFound: Partial<PostEntity>): Promise<PostEntity> {
    return await this.postRepository.findOne({ where: postToBeFound });
  }

  async findManyPost(postToBeFound: Partial<PostEntity>): Promise<PostEntity[]> {
    return await this.postRepository.find({where:postToBeFound })
  }

  async createPost(postToBeCreated: IPostDTO): Promise<PostEntity> {
    const newPostID = randomUUID();

    await this.postRepository.save({ ...postToBeCreated, id: randomUUID() });

    const createdPost = await this.postRepository.findOne({
      where: {
        id: newPostID,
      },
    })


    return createdPost ;
  }

  async deletePost(postId : String): Promise<string> {


    try {
      await this.postRepository.createQueryBuilder().delete().from(PostEntity).where("id = :id", { id: postId })
      .execute()
      return `post with id: ${postId} has been deleted sucessfully`
    } catch (error) {
      return `fail attempt to delete post with id: ${postId}`
    }
  }

}
