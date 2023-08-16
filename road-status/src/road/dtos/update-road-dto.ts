import {
  IsOptional,
  IsNumber,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';

export class UpdateRoadDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(99)
  code: number;

  @IsOptional()
  @IsString()
  @Length(3, 300)
  title: string;

  @IsOptional()
  @IsString()
  priority: string;
}
