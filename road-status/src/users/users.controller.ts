import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserFilters } from './interfaces/user-filters.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAllUsers(@Query() filters: UserFilters) {
    return this.usersService.getAllUsers(filters);
  }

  @Get('/email')
  async findUserByEmail(@Body() email: string) {
    const foundUser = await this.usersService.findUserByEmail(
      Object.values(email)[0],
    );
    console.log(Object.values(email)[0]);
    if (!foundUser)
      throw new NotFoundException(
        `User with email ${Object.values(email)[0]} doesn't exists`,
      );
    return foundUser;
  }

  @Get('/:id')
  findUserById(@Param('id') userId: string) {
    return this.usersService.findUserById(userId);
  }

  @Patch('/:id')
  updateUser(@Param('id') userId: string, @Body() updateData: UpdateUserDto) {
    return this.usersService.updateUser(userId, updateData);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteUser(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
