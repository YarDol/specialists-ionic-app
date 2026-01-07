import { Module } from '@nestjs/common';
import { SpecialistsController } from './primary-adapters/specialists.controller';
import { SpecialistsService } from './secondary-adapters/specialists.service';
import { GetSpecialistsUseCase } from './application/usecases/get-specialists.usecase';

@Module({
  controllers: [SpecialistsController],
  providers: [SpecialistsService, GetSpecialistsUseCase],
})
export class SpecialistsModule {}
