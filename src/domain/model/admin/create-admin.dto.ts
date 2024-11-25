import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAdminDto {
    @IsString()
    @ApiProperty({
        description: 'The user id of the admin',
        example: '1'
    })
    userId: string;
}
