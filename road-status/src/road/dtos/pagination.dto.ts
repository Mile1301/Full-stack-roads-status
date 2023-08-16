import { IsNumberString, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumberString()
  pageNum?: number;

  @IsOptional()
  @IsNumberString()
  perPage?: number;
}
