import { IsOptional, IsNumber, IsString, Length, Min } from 'class-validator';

export class UpdateRoadDto {
  @IsOptional()
  @IsNumber()
  @Length(3)
  code: number;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  title: string;

  @IsOptional()
  @IsString()
  priority: string;
}
