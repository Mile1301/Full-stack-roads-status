import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserFilters } from './interfaces/user-filters.interface';

@Injectable()
export class UsersService {
  @InjectRepository(User) private usersRepo: Repository<User>;

  getAllUsers(filters: UserFilters) {
    const filterConfig: FindManyOptions<User> = {};

    if (filters.orderBy) {
      const sortOrder = filters.sortOrder || 'ASC';
      if (filters.orderBy === 'age') {
        filterConfig.order = { age: sortOrder };
      }
    }

    if (filters.firstName) {
      filterConfig.where = {
        ...filterConfig.where,
        firstName: ILike(`%${filters.firstName}%`),
      };
    }
    if (filters.lastName) {
      filterConfig.where = {
        ...filterConfig.where,
        lastName: ILike(`%${filters.lastName}%`),
      };
    }
    if (filters.email) {
      filterConfig.where = {
        ...filterConfig.where,
        email: ILike(`%${filters.email}%`),
      };
    }

    return this.usersRepo.find(filterConfig);
  }

  async findUserById(userId: string) {
    if (userId?.length !== 36) {
      throw new BadRequestException(
        'Invalid userId. Please provide a valid one.',
      );
    }

    const foundUser = await this.usersRepo.findOneBy({ userId });
    if (!foundUser) throw new NotFoundException('User not found');

    return foundUser;
  }

  async findUserByEmail(email: string) {
    const user = await this.usersRepo.findOneBy({ email });
    return user;
  }

  async createUser(userData: CreateUserDto) {
    const newUser = this.usersRepo.create(userData);
    await this.usersRepo.save(userData);
    return newUser;
  }

  async updateUser(userId: string, updateData: UpdateUserDto) {
    const foundUser = await this.findUserById(userId);
    Object.assign(foundUser, updateData);
    await this.usersRepo.save(foundUser);
    return foundUser;
  }

  async deleteUser(userId: string) {
    const foundUser = await this.findUserById(userId);
    await this.usersRepo.remove(foundUser);
  }
}
