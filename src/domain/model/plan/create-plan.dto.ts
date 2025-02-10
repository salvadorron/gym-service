import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreatePlanDto {
    @IsString()
    @ApiProperty({
        description: 'the name of the plan',
        example: 'This is the name of the plan'
    })
    name: string;
    
    @IsString()
    @ApiProperty({
        description: 'the description of the plan',
        example: 'This is a description of the plan'
    })
    features: string;

    @IsNumberString()
    @ApiProperty({
        description: 'the amount of the plan',
    })
    price: string

    @IsString()
    @ApiProperty({
        description: 'the billing interval of the plan'
    })
    duration: string



}
