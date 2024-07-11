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
    console.log(userSent)
    const userToBeCreated: IUserDTO = {
      name: userSent.name,
      cpf: userSent.cpf,
      email: userSent.email,
      birthDate: userSent.birthDate,
    };

    return await this.userService.createUser(userToBeCreated);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') userId : string): Promise<String> {
  return await this.userService.deleteUser(userId);
  }

}
