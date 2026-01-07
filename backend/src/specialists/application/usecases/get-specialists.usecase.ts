import { Injectable } from '@nestjs/common';
import { SpecialistsService } from 'src/specialists/secondary-adapters/specialists.service';
import { Specialist } from '../data/interfaces/specialist.interface';

export interface GetSpecialistsQuery {
  page?: number;
  limit?: number;
  ageMin?: number;
  ageMax?: number;
  gender?: 'male' | 'female';
  priceMin?: number;
  priceMax?: number;
}

interface GetSpecialistsResult {
  items: Specialist[];
  total: number;
}

@Injectable()
export class GetSpecialistsUseCase {
  constructor(private readonly specialistsService: SpecialistsService) {}

  execute(query: GetSpecialistsQuery): GetSpecialistsResult {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const allSpecialists = this.specialistsService.getAll();
    const filtered = allSpecialists.filter(this.buildFilterPredicate(query));

    const total = filtered.length;
    const start = (page - 1) * limit;

    return {
      items: filtered.slice(start, start + limit),
      total,
    };
  }

  private buildFilterPredicate(query: GetSpecialistsQuery) {
    const { ageMin, ageMax, gender, priceMin, priceMax } = query;
    return (s: Specialist): boolean => {
      if (ageMin !== undefined && s.age < ageMin) return false;
      if (ageMax !== undefined && s.age > ageMax) return false;
      if (gender !== undefined && s.gender !== gender) return false;
      if (priceMin !== undefined && s.price < priceMin) return false;
      if (priceMax !== undefined && s.price > priceMax) return false;
      return true;
    };
  }
}
