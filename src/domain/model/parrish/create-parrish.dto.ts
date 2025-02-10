import { IsNotEmpty, IsString } from "class-validator";

export class CreateParrishDto {

    @IsString()
    @IsNotEmpty()
    id: string;


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    municipalityId: string;
}
