import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsDateString, IsEnum, IsNumber, IsString } from "class-validator";

export class CreateScheduleDto {
    @IsNumber()
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

    @IsArray({ each: false })
    @ArrayMinSize(1)
    @IsEnum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], { each: true, message: 'days must be either "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"' })
    @ApiProperty({
        description: 'the days of the training',
        example: '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]'
    })
    days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[]

    @IsString()
    @ApiProperty({
        description: 'the training id',
        example: 3
    })
    trainingId: number


}