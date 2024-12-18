import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNumberString, IsString } from "class-validator";

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
    description: string;
    
    @IsNumber()
    @ApiProperty({
        description: 'the client id associated of the plan',
        example: '1'
    })
    clientId: number;

    @IsNumber()
    @ApiProperty({
        description: 'the trainer id associated of the plan',
        example: 1
    })
    trainerId: number

    @IsNumberString()
    @ApiProperty({
        description: 'the amount of the plan',
    })
    amount: number

    @IsString()
    @ApiProperty({
        description: 'the billing interval of the plan'
    })
    billing_interval: string



}
