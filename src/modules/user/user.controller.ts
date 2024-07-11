import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import type { IUserDTO } from './user.dto';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findUser(): Promise<UserEntity[]> {
    return await this.userService.findUser();
  }

  @Get()
  async findOneUser(userToBeFound: Partial<UserEntity>): Promise<UserEntity> {
    return await this.userService.findOneUser(userToBeFound);
  }

  @Post()
  async saveUser(userSent: IUserDTO): Promise<UserEntity> {
    const userToBeCreated: IUserDTO = {
      name: userSent.name,
      cpf: userSent.cpf,
      email: userSent.email,
      birthDate: userSent.birthDate,
    };

    return await this.userService.createUser(userToBeCreated);
  }

  //   @Post()
  //   async getUser(): Promise<UserEntity[]> {
  //     return await this.userService.getUser();
  //   }

  //   @Delete()
  //   async getUser(): Promise<UserEntity[]> {
  //     return await this.userService.getUser();
  //   }
}
