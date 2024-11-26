import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumberString, IsString } from "class-validator";

export class CreateMembershipDto {
    @IsString()
    @ApiProperty({
        description: 'the name of the membership',
        example: 'Gold'
    })
    name: string;
    
    @IsEnum(['Monthly', 'Yearly'], { message: 'type must be either "Monthly" or "Yearly"' })
    @ApiProperty({
        description: 'the type of the membership',
        example: 'Monthly'
    })
    type: 'Monthly' | 'Yearly';

    @IsNumberString()
    @ApiProperty({
        description: 'the price of the membership',
        example: '19.99'
    })
    price: string

}
