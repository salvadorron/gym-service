import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateTrainingDto {
    @IsNumber()
    @ApiProperty({
        description: 'the plan id associated of the training',
        example: '1'
    })
    planId: number;
    
    @IsNumber()
    @ApiProperty({
        description: 'the duration of the training',
        example: 390
    })
    duration: number

    @IsNumber()
    @ApiProperty({
        description: 'the level of the training',
        example: 1
    })
    level: number


    @IsBoolean()
    @ApiProperty({
        description: 'indicates if the training is routine',
        example: false
    })
    isRoutine: boolean

}
