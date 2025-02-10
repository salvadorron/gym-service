import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMunicipalityDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    stateId: number;
}
