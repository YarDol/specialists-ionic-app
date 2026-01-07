import { Controller, Get, Query } from '@nestjs/common';
import { GetSpecialistsUseCase } from '../application/usecases/get-specialists.usecase';
import { GetSpecialistsResponseDto } from '../application/data/responses/get-specialists.response.dto';
import { GetSpecialistsRequestDto } from '../application/data/requests/get-specialists.request.dto';

@Controller('specialists')
export class SpecialistsController {
  constructor(private readonly getSpecialistsUseCase: GetSpecialistsUseCase) {}

  @Get()
  getSpecialists(@Query() query: GetSpecialistsRequestDto) {
    const result = this.getSpecialistsUseCase.execute({
      page: Number(query.page),
      limit: Number(query.limit),
      ageMin: Number(query.ageMin),
      ageMax: Number(query.ageMax),
      gender: query.gender,
      priceMin: Number(query.priceMin),
      priceMax: Number(query.priceMax),
    });

    return new GetSpecialistsResponseDto(result.items, result.total);
  }
}
