import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateDayDto {
    @IsString()
    @ApiProperty({
        description: 'the name of the day',
        example: 'Monday'
    })
    dayOfWeek: string;
    
    @IsNumber()
    @ApiProperty({
        description: 'the schedule id associated of day',
        example: '1'
    })
    scheduleId: number

}