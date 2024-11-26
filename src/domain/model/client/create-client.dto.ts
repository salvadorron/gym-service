import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreateClientDto {
    @IsNumber()
    @ApiProperty({
        description: 'The user id of the client',
        example: '1'
    })
    userId: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        description: 'the progress of the training percentage',
        example: 42
    })
    trainingProgress?: number;

}
