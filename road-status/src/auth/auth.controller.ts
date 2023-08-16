import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @HttpCode(200)
  registerUser(@Body() userData: CreateUserDto) {
    return this.authService.registerUser(userData);
  }

  @Post('/login')
  async loginUser(@Body() userCredentials: CredentialsDto, @Res() response) {
    const token = await this.authService.loginUser(userCredentials);
    response.set('authorization', token);
    return response.status(200).json(token);
  }
}
