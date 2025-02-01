import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateTrainingDto {
  @IsNumber()
  @ApiProperty({
    description: 'the plan id associated of the training',
    example: '1',
  })
  planId: number;

  @IsBoolean()
  @ApiProperty({
    description: 'indicates the name of training',
    example: false,
  })
  name: string;
}
