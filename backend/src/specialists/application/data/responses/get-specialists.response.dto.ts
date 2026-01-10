import { ApiProperty } from '@nestjs/swagger';
import { Specialist } from '../interfaces/specialist.interface';
import { GetSpecialistsRequestDto } from '../requests/get-specialists.request.dto';

export class GetSpecialistsResponseDto {
  constructor(items: Specialist[], total: number) {
    this.items = items;
    this.total = total;
  }

  @ApiProperty({
    type: [GetSpecialistsRequestDto],
    description: 'Specialists list',
    isArray: true,
  })
  items: Specialist[];

  @ApiProperty({ type: Number, description: 'Total number of specialists' })
  total: number;
}
