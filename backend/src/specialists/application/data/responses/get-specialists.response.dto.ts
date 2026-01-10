import { ApiProperty } from '@nestjs/swagger';
import { Specialist } from '../interfaces/specialist.interface';
import { SpecialistDto } from '../dto/specialist.dto';

export class GetSpecialistsResponseDto {
  constructor(items: Specialist[], total: number) {
    this.items = items;
    this.total = total;
  }

  @ApiProperty({
    type: [SpecialistDto],
    description: 'List of specialists',
    isArray: true,
  })
  items: Specialist[];

  @ApiProperty({
    type: Number,
    description: 'Total number of specialists matching the filters',
    example: 75,
  })
  total: number;
}
