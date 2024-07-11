import { randomUUID } from 'crypto';
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

    return await this.userRepository.findOne({
      where: {
        id: newUserID,
      },
    });
  }
}

// const user: IUserDTO = {
//   name: 'vinicius',
//   cpf: '07736565422',
//   email: 'vinicius2508@hotmail.com',
//   birthDate: new Date(),
//   pads: [randomUUID(), randomUUID()],
// };
// return user;
