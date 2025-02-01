import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from '../services/admin/admin.service';
import { CreateAdminDto } from '../../domain/model/admin/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    const newAdmin = await this.adminService.save(createAdminDto);
    return newAdmin;
  }

  @Get()
  async findAll() {
    const clients = await this.adminService.getAdmins();
    return clients;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const client = await this.adminService.getAdminById(id);
    return client;
  }
}
