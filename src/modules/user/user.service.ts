import { randomUUID, UUID } from 'crypto';
import { IUserDTO } from './user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOneUser(userToBeFound: Partial<UserEntity>): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: userToBeFound });
  }

  async createUser(userToBeCreated: IUserDTO): Promise<UserEntity> {
    const newUserID = randomUUID();

    await this.userRepository.save({ ...userToBeCreated, id: randomUUID() });

    const createdUser = await this.userRepository.findOne({
      where: {
        id: newUserID,
      },
    })

    console.log(createdUser)

    return createdUser ;
  }

  async deleteUser(userId : String): Promise<string> {

    try {
      await this.userRepository.createQueryBuilder().delete().from(UserEntity).where("id = :id", { id: userId })
      .execute()
      return `user with id: ${userId} has been deleted sucessfully`
    } catch (error) {
      return `fail attempt to delete user with id: ${userId}`
    }
  }

}
