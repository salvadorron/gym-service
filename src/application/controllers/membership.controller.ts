import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MembershipService } from '../services/membership/membership.service';
import { CreateMembershipDto } from 'src/domain/model/membership/create-membership.dto';

@Controller('membership')
export class MembershipController {
    
    constructor(private readonly membershipService: MembershipService){}

    @Post()
    async create(@Body() createMembershipDto: CreateMembershipDto) {
        return this.membershipService.save(createMembershipDto);
    }

    @Get()
    async findAll() {
        return this.membershipService.getMemberships();
    }

    @Get(':name')
    async findById(
        @Param(':name') name: string,
        @Query('type') type: string = 'Monthly',
    ) {
        return this.membershipService.getOneMembership(name, type);
    }
}
