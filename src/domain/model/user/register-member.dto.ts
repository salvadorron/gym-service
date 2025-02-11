import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsEnum } from 'class-validator';

export class RegisterMemberDto {
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
        example: 'pedroperez'
    })
    username: string;
    
    @IsString()
    @ApiProperty({
        description: 'password of the user',
        example: 'dwunkhh343+'
    })
    password: string;
    
    
    @IsString()
    @ApiProperty({
        description: 'role_id of the user',
        example: 'client'
    })
    role_id: string;

    @IsString()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    medical_conditions: string

    @IsNumber()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    weight: number

    @IsNumber()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    height: number

    @IsString()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
        zip_code: string

    @IsString()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    city: string

    @IsString()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    address: string

    
    @IsNumber()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    state_id: number
    
    @IsNumber()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    municipality_id: number

    @IsNumber()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    parrish_id: number

    @IsEnum(["MALE","FEMAlE"])
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    gender: "MALE" | "FEMALE"

    @IsString()
    @ApiProperty({
        description: 'example field',
        example: 'this is a example'
    })
    specialty: string

}
