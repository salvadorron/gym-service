import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsString } from "class-validator"

export class CreateNutritionalPlanDto {
    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })

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
    startDate: Date

    @ApiProperty({
        description: 'this is a description',
        example: 'description'
    })
    @IsDate()
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
}
