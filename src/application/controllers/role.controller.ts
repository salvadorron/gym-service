import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from '../../domain/model/role/create-role.dto';
import { RoleService } from '../services/role/role.service';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Get()
    findAll() {
        return this.roleService.getRoles();
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.roleService.getRoleById(+id);
    }

    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.save(createRoleDto);
    }
}
