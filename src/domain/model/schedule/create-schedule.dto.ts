import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsEnum, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsString()
  @ApiProperty({
    description: 'turn of training',
    example: 'M',
  })
  turn: string;

  @IsArray({ each: false })
  @ArrayMinSize(1)
  @IsEnum(
    [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    {
      each: true,
      message:
        'days must be either "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"',
    },
  )
  @ApiProperty({
    description: 'the days of the training',
    example:
      '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]',
  })
  days: (
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
  )[];

  @IsString()
  @ApiProperty({
    description: 'the training id',
    example: 3,
  })
  trainingId: number;
}
