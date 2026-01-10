import { Controller, Get, Query } from '@nestjs/common';
import { GetSpecialistsUseCase } from '../application/usecases/get-specialists.usecase';
import { GetSpecialistsResponseDto } from '../application/data/responses/get-specialists.response.dto';
import { GetSpecialistsRequestDto } from '../application/data/requests/get-specialists.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('specialists')
export class SpecialistsController {
  constructor(private readonly getSpecialistsUseCase: GetSpecialistsUseCase) {}

  @Get()
  @ApiOperation({
    summary: 'Get specialists',
    description: 'Get specialists list',
  })
  @ApiResponse({
    status: 200,
    description: 'Specialists list',
    type: GetSpecialistsResponseDto,
    isArray: true,
  })
  getSpecialists(@Query() query: GetSpecialistsRequestDto) {
    const result = this.getSpecialistsUseCase.execute({
      page: Number(query.page) || 1,
      limit: Number(query.limit) || 10,
      ageMin: query.ageMin ? Number(query.ageMin) : undefined,
      ageMax: query.ageMax ? Number(query.ageMax) : undefined,
      gender: query.gender,
      priceMin: query.priceMin ? Number(query.priceMin) : undefined,
      priceMax: query.priceMax ? Number(query.priceMax) : undefined,
    });

    return new GetSpecialistsResponseDto(result.items, result.total);
  }

  @Get('count')
  @ApiOperation({
    summary: 'Get specialists count',
    description: 'Get specialists count',
  })
  @ApiResponse({
    status: 200,
    description: 'Specialists count',
    type: Number,
  })
  getSpecialistsCount(@Query() query: GetSpecialistsRequestDto) {
    const result = this.getSpecialistsUseCase.execute({
      page: 1,
      limit: 1,
      ageMin: query.ageMin ? Number(query.ageMin) : undefined,
      ageMax: query.ageMax ? Number(query.ageMax) : undefined,
      gender: query.gender,
      priceMin: query.priceMin ? Number(query.priceMin) : undefined,
      priceMax: query.priceMax ? Number(query.priceMax) : undefined,
    });

    return { count: result.total };
  }
}
