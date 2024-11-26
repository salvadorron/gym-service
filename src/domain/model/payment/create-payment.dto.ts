import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNumberString, IsString } from "class-validator";

export class CreatePaymentDto {
    @IsNumberString()
    @ApiProperty({
        description: 'the amount of the payment',
        example: '100000'
    })
    amount: string;
    
    @IsString()
    @ApiProperty({
        description: 'the method of the payment',
        example: 'PayPal'
    })
    method: string;

    @IsString()
    @ApiProperty({
        description: 'the description of the payment',
        example: 'This is a description of the payment'
    })
    description: string


    @IsNumber()
    @ApiProperty({
        description: 'the client id associated of the payment',
        example: 1
    })
    clientId: number

}
