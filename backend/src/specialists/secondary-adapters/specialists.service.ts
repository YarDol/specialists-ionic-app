import { Injectable } from '@nestjs/common';
import { Specialist } from '../application/data/interfaces/specialist.interface';
import specialists from '../../data/specialist.json';
@Injectable()
export class SpecialistsService {
  private readonly specialists: Specialist[] = specialists as Specialist[];

  getAll(): Specialist[] {
    return this.specialists;
  }
}
