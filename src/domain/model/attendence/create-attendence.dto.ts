import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsDateString, IsNumber } from "class-validator";

export class CreateAttendenceDto {
    @IsDateString()
    @Transform(({ value }) => new Date(value))
    @ApiProperty({
        description: 'the date of the attendence',
        example: '2023-01-01'
    })
    attendenceDate: Date;

    @IsBoolean()
    @ApiProperty({
        description: 'the status of the attendence',
        example: true
    })
    status: boolean;
    
    @IsNumber()
    @ApiProperty({
        description: 'the client id associated of the attendence',
        example: 42
    })
    clientId: number;

    @IsNumber()
    @ApiProperty({
        description: 'the schedule id associated of the attendence',
        example: 42
    })
    scheduleId: number;

}
