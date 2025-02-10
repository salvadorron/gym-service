import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParrishService } from '../services/parrish/parrish.service';
import { CreateParrishDto } from '../../domain/model/parrish/create-parrish.dto';

@Controller('parrish')
export class ParrishController {
    constructor(private readonly parrishService: ParrishService) {}

    @Post()
    create(@Body() createParrishDto: CreateParrishDto) {
        return this.parrishService.save(createParrishDto);
    }

    @Get()
    findAll() {
        return this.parrishService.getParrishes();
    }

    @Get('/municipality/:municipalityId')
    findByMunicipality(@Param('municipalityId') municipalityId: string) {
        return this.parrishService.getParrishesByMunicipality(+municipalityId)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parrishService.getParrishById(id);
    }



}
