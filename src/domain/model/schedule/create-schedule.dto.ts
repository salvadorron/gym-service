import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateScheduleDto {
    @IsString()
    @ApiProperty({
        description: 'the duration of the training',
        example: 390
    })
    duration: number;
    
    @IsDateString()
    @ApiProperty({
        description: 'the start time of the training',
        example: '01-01-2024 01:00:00'
    })
    timeStart: string

    @IsDateString()
    @ApiProperty({
        description: 'the end time of the training',
        example: '01-01-2024 08:59:59'
    })
    timeEnd: string

}