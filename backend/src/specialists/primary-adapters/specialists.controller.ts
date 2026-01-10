import { Controller, Get, Query } from '@nestjs/common';
import { GetSpecialistsUseCase } from '../application/usecases/get-specialists.usecase';
import { GetSpecialistsResponseDto } from '../application/data/responses/get-specialists.response.dto';
import { GetSpecialistsRequestDto } from '../application/data/requests/get-specialists.request.dto';
import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Specialists')
@Controller('specialists')
export class SpecialistsController {
  constructor(private readonly getSpecialistsUseCase: GetSpecialistsUseCase) {}

  @Get()
  @ApiOperation({
    summary: 'Get paginated list of specialists',
    description:
      'Returns a paginated list of specialists with optional filtering by age, gender, and price range.',
  })
  @ApiOkResponse({
    description: 'Successfully retrieved specialists list',
    type: GetSpecialistsResponseDto,
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
    summary: 'Get count of specialists',
    description:
      'Returns the total count of specialists matching the provided filters without pagination.',
  })
  @ApiOkResponse({
    description: 'Successfully retrieved specialists count',
    schema: {
      type: 'object',
      properties: {
        count: {
          type: 'number',
          description: 'Total number of specialists matching filters',
          example: 37,
        },
      },
    },
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
