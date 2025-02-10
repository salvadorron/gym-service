import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

export class CreateExcersiseDto {
    @ApiProperty()
    @IsString()
    description: string
    
    @ApiProperty({
        description: "the difficulty of the excersise",
        enum: ["BEGGINER", "INTERMEDIATE", "ADVANCED"],
        example: "BEGGINER"
    })
    @IsEnum(["BEGGINER", "INTERMEDIATE", "ADVANCED"])
    difficulty: "BEGGINER" | "INTERMEDIATE" | "ADVANCED"
    
    @ApiProperty({
        example: "bench press",
        description: "the equipment of the excersise",
    })
    @IsString()
    equipment: string

    @ApiProperty({
        example: "chest",
        description: "the muscle group of the excersise",
    })
    @IsString()
    muscleGroup: string
    
    @ApiProperty({
        example: "bench press",
        description: "the name of the excersise",
    })
    @IsString()
    name: string
    
    @ApiProperty({
        example: "duration",
        description: "the type of the excersise",
    })
    @IsString()
    type: string

}
