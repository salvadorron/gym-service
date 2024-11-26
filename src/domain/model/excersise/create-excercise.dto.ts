import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateExcersiseDto {
    @IsString()
    @ApiProperty({
        description: 'the name of the excersise',
        example: 'Bench Press'
    })
    name: string;
    
    @IsString()
    @ApiProperty({
        description: 'the description of the excersise',
        example: 'this is a bench press'
    })
    description: string;

    @IsNumber()
    @ApiProperty({
        description: 'the sets of the excersise',
        example: 3
    })
    sets: number
    
    @IsNumber()
    @ApiProperty({
        description: 'the reps of the excersise',
        example: 4
    })
    repeats: number

    @IsNumber()
    @ApiProperty({
        description: 'the training id associated of the excersise',
        example: '1'
    })
    trainingId: number

}
