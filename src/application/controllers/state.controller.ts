import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StateService } from '../services/state/state.service';
import { CreateStateDto } from '../../domain/model/state/create-state.dto';

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {}

    @Post()
    create(@Body() createStateDto: CreateStateDto) {
        return this.stateService.save(createStateDto);
    }

    @Get()
    findAll() {
        return this.stateService.getStates();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.stateService.getStateById(id);
    }
}
