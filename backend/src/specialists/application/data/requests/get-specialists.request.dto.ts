import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetSpecialistsRequestDto {
  @ApiPropertyOptional({
    description: 'Page number (starts from 1)',
    type: Number,
    minimum: 1,
    example: 1,
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    type: Number,
    minimum: 1,
    example: 10,
    default: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;

  @ApiPropertyOptional({
    description: 'Minimum age filter',
    type: Number,
    example: 18,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ageMin?: number;

  @ApiPropertyOptional({
    description: 'Maximum age filter',
    type: Number,
    example: 65,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ageMax?: number;

  @ApiPropertyOptional({
    description: 'Gender filter',
    enum: ['male', 'female'],
    example: 'female',
  })
  @IsOptional()
  @IsEnum(['male', 'female'])
  gender?: 'male' | 'female';

  @ApiPropertyOptional({
    description: 'Minimum price filter (in UAH)',
    type: Number,
    example: 300,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  priceMin?: number;

  @ApiPropertyOptional({
    description: 'Maximum price filter (in UAH)',
    type: Number,
    example: 5000,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  priceMax?: number;
}
