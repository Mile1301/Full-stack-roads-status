import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsOptional()
  @IsNumber()
  @Min(18)
  age: number;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  password: string;

  @IsOptional()
  @IsString()
  role: 'admin' | 'user';

  @IsOptional()
  @IsString()
  refreshTokens: string;
}
