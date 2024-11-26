import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExcersiseService } from '../services/excercise/excersise.service';
import { CreateExcersiseDto } from 'src/domain/model/excersise/create-excercise.dto';

@Controller('excersise')
export class ExcersiseController {
    
    constructor(private readonly excersiseService: ExcersiseService){}

    @Post()
    async create(@Body() createExcersiseDto: CreateExcersiseDto) {
        return this.excersiseService.save(createExcersiseDto);
    }

    @Get()
    async findAll() {
        return this.excersiseService.getExcersises();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.excersiseService.getExcersiseById(id);
    }
}
