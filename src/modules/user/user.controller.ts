import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import type { IUserDTO } from './user.dto';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findall')
  async findUser(): Promise<UserEntity[]> {
    return await this.userService.findUser();
  }

  @Get('findone')
  async findOneUser(@Body() userToBeFound: Partial<UserEntity>): Promise<UserEntity> {
    return await this.userService.findOneUser(userToBeFound);
  }

  @Post('create')
  async saveUser(@Body() userSent: IUserDTO): Promise<UserEntity> {

    const userToBeCreated: IUserDTO = {
      name: userSent.name,
      cpf: userSent.cpf,
      email: userSent.email,
      password: userSent.password,
      birthDate: userSent.birthDate,
    };

    return await this.userService.createUser(userToBeCreated);
  }

  @Delete('delete')
  async deleteUser(@Body() id): Promise<String> {
  return await this.userService.deleteUser(id.id);
  }

}
