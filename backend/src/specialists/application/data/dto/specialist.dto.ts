import { ApiProperty } from '@nestjs/swagger';
import { AvailableSlotDto } from './available-slot.dto';

export class SpecialistDto {
  @ApiProperty({ description: 'Specialist ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Specialist name', example: 'Dr. John Smith' })
  name: string;

  @ApiProperty({ description: 'Specialist age', example: 28 })
  age: number;

  @ApiProperty({
    description: 'Specialist gender',
    enum: ['male', 'female'],
    example: 'male',
  })
  gender: 'male' | 'female';

  @ApiProperty({ description: 'Price per session in UAH', example: 300 })
  price: number;

  @ApiProperty({ description: 'Session duration in minutes', example: 60 })
  duration: number;

  @ApiProperty({ description: 'Specialist rating', example: 4.5 })
  rating: number;

  @ApiProperty({ description: 'Number of reviews', example: 50 })
  reviewsCount: number;

  @ApiProperty({
    description: 'Specialist description',
    example: 'Certified therapist specializing in mental health and wellbeing.',
  })
  description: string;

  @ApiProperty({
    description: 'Avatar URL',
    example: 'https://i.pravatar.cc/150?img=1',
  })
  avatar: string;

  @ApiProperty({ description: 'Years of experience', example: 2 })
  experience: number;

  @ApiProperty({ description: 'Number of clients', example: 40 })
  clients: number;

  @ApiProperty({ description: 'Number of sessions', example: 150 })
  sessions: number;

  @ApiProperty({ description: 'Country flag emoji', example: '🇺🇸' })
  countryFlag: string;

  @ApiProperty({
    description: 'Whether specialist is verified',
    example: false,
  })
  isVerified: boolean;

  @ApiProperty({ description: 'Specialist badge', example: 'Super Specialist' })
  badge: string;

  @ApiProperty({
    description: 'Available time slots',
    type: [AvailableSlotDto],
  })
  availableSlots: AvailableSlotDto[];
}
