import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MunicipalityService } from '../services/municipality/municipality.service';
import { CreateMunicipalityDto } from '../../domain/model/municipality/create-municipality.dto';

@Controller('municipality')
export class MunicipalityController {
    constructor(private readonly municipalityService: MunicipalityService) {}

    @Post()
    create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
        return this.municipalityService.save(createMunicipalityDto);
    }

    @Get()
    findAll(
        @Query() params?: Partial<CreateMunicipalityDto> 
    ) {
        return this.municipalityService.getMunicipalities(params);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.municipalityService.getMunicipalityById(id);
    }

}
