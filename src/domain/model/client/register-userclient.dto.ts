import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RegisterUserClientDto {
  @IsString()
  @ApiProperty({
    description: 'The first name of the user',
    example: 'pedro',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'the last name of the user',
    example: 'perez',
  })
  last_name: string;

  @IsNumber()
  @ApiProperty({
    description: 'The age of the user',
    example: 23,
  })
  age: number;

  @IsString()
  @ApiProperty({
    description: 'the unique username of the user',
    example: 'pedroperez',
  })
  username: string;

  @IsString()
  @ApiProperty({
    description: 'password of the user',
    example: 'dwunkhh343+',
  })
  password: string;
}
