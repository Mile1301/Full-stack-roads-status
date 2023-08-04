import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateRoadDto {
  @IsNumber()
  @Min(1)
  @Max(99)
  code: number;

  @IsString()
  @Length(3, 30)
  title: string;

  @IsString()
  priority: string;
}
