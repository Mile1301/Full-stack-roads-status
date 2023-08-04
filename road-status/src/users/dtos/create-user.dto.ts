import { IsEmail, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @Min(18)
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  @Length(3, 30)
  password: string;
}
