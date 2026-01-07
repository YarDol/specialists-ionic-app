import { Specialist } from '../interfaces/specialist.interface';

export class GetSpecialistsResponseDto {
  constructor(items: Specialist[], total: number) {
    this.items = items;
    this.total = total;
  }

  items: Specialist[];
  total: number;
}
