import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';

export class GetSpecialistsRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ageMin?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ageMax?: number;

  @IsOptional()
  @IsEnum(['male', 'female'])
  gender?: 'male' | 'female';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  priceMin?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  priceMax?: number;
}
