import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
    findAll(
        @Query() params?: Partial<CreateParrishDto>
    ) {
        return this.parrishService.getParrishes(params);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parrishService.getParrishById(id);
    }



}
