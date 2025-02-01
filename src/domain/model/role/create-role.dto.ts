import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsLowercase()
  @IsNotEmpty()
  @Transform(({ value }) => value.split(' ').join('_'))
  @ApiProperty({
    description: 'The id of the role',
    example: 'administrator',
  })
  id: string;

  @IsString()
  @ApiProperty({
    description: 'The name of the role',
    example: 'Administrator',
  })
  name: string;
}
