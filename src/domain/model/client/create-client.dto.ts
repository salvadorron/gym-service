import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    @ApiProperty({
        description: 'The user id of the client',
        example: '1'
    })
    userId: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        description: 'the progress of the training percentage',
        example: 42
    })
    trainingProgress?: number;

}
