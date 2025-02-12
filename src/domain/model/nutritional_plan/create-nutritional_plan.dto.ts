import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsDate, IsDateString, IsString } from "class-validator"

export class CreateNutritionalPlanDto {
    

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    planName: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    planType: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsDate()
    @Transform(fn => new Date(fn.value))
    startDate: Date

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsDate()
    @Transform(fn => new Date(fn.value))
    endDate: Date

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    status: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    calories: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    userId: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    breakfast: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    lunch: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    dinner: string

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsString()
    snacks: string
    

    
}
