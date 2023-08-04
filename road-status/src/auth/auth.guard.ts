import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // In NestJS, the context refers to the execution context of the incoming request. It encapsulates all the information related to the current request and provides access to the request, response, and other contextual data. The context object is typically passed to various components in the application, such as controllers, guards, interceptors, pipes, and filters, allowing these components to interact with the incoming request and outgoing response.

      // The ExecutionContext is an abstract class provided by NestJS, and you can use the switchToHttp() method on this class to get an instance of the HttpContext specific to the HTTP request. The HttpContext contains information about the current HTTP request and response.

      //1. Access the request and perform validation or authorization checks
      const request = context.switchToHttp().getRequest();

      //2. Extract the token from the request
      const token = this.extractToken(request);
      //3. Verify and extract the payload from the token using jwtService
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      });
      // console.log('payload id is :', payload.userId);
      //4. Check to see if the users still exists
      const user = await this.usersService.findUserById(payload.userId);

      // We attach the user data to the request object so that the next middleware/guard/handler can have access to it without asking for the data from the database
      request.user = user;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException();
    }
    // Return `true` if the request should be allowed, `false` otherwise
    return true;
  }
  private extractToken(request: Request) {
    const token = request.headers['authorization']?.split(' ')[1];
    return token;
  }
}
