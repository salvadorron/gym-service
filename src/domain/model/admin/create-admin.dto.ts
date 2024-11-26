import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateAdminDto {
    @IsNumber()
    @ApiProperty({
        description: 'The user id of the admin',
        example: '1'
    })
    userId: number;
}
