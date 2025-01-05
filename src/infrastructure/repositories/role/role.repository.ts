import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/services/prisma/prisma.service';
import { Prisma, Role } from '@prisma/client';
import { RoleRepository } from '../../../domain/repositories/role/role.repository';

@Injectable()
export class RoleRepositoryImpl implements RoleRepository {

    constructor(private prisma: PrismaService) {}
    async getRoleById(id: string): Promise<Role> {
        return this.prisma.role.findUnique({ where: { id } });
    }
    async getRoles(): Promise<Role[]> {
        return this.prisma.role.findMany();
    }

    async save(data: Prisma.RoleCreateInput): Promise<Role> {

        return this.prisma.role.create({ data });

    }
}
