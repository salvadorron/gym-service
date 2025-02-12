import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateTrainerDto {
  @IsNumber()
  @ApiProperty({
    description: 'The user id of the client',
    example: '1',
  })
  userId: number;

  @IsString()
  @ApiProperty({
    description: 'the speciality of the trainer',
    example: 'weights',
  })
  speciality: string;

  @IsArray({ each: false })
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty({
    description: 'the certificates of the trainer',
    example: '["certificate1", "certificate2"]',
  })
  certificates: string[];
}
