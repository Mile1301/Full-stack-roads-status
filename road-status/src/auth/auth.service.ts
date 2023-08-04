import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CredentialsDto } from './dtos/credentials.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //   1.Register user

  async registerUser(userData: CreateUserDto) {
    const registeredUser = await this.usersService.findUserByEmail(
      userData.email,
    );

    if (registeredUser) throw new BadRequestException('Email already in use');

    const hashedPasswod = await bcrypt.hash(userData.password, 8);

    userData.password = hashedPasswod;

    await this.usersService.createUser(userData);
  }

  //   2.Login user

  async loginUser(userCerdentials: CredentialsDto) {
    const loggingUser = await this.usersService.findUserByEmail(
      userCerdentials.email,
    );
    if (!loggingUser) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(
      userCerdentials.password,
      loggingUser.password,
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const { password, ...userWithoutPassword } = loggingUser;

    const token = this.jwtService.signAsync(userWithoutPassword);
    return token;
  }
}
