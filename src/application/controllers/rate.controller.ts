import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RateService } from '../services/rate/rate.service';

@Controller('rate')
export class RateController {

    constructor(private readonly rateService: RateService){}

    @Post()
    async create(@Body() createRateDto: any) {
        return 'this action create rate'
    }

    @Get()
    async findAll() {
        return this.rateService.getRates();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.rateService.getRateById(id);
    }
}
