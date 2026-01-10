import { ApiProperty } from '@nestjs/swagger';

export class AvailableSlotDto {
  @ApiProperty({
    description: 'Slot label (e.g., "Today, 10:00 AM")',
    example: 'Today, 10:00 AM',
  })
  label: string;

  @ApiProperty({
    description: 'Slot date in ISO format',
    example: '2026-01-10T13:22:00.478227Z',
  })
  date: string;
}
