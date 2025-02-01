import { Injectable } from '@nestjs/common';
import { Prisma, Admin } from '@prisma/client';
import { AdminRepository } from '../../../domain/repositories/admin/admin.repository';
import { PrismaService } from '../../../infrastructure/services/prisma/prisma.service';

@Injectable()
export class AdminRepositoryImpl implements AdminRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: Prisma.AdminCreateInput): Promise<Admin> {
    const newAdmin = await this.prisma.admin.create({ data });
    return newAdmin;
  }
  async getAdmins(): Promise<Admin[]> {
    const admins = await this.prisma.admin.findMany();
    return admins;
  }
  async getAdminById(id: number): Promise<Admin> {
    const admin = await this.prisma.admin.findUnique({ where: { id } });
    return admin;
  }
}
