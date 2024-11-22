import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { RoleRepositoryImpl } from 'src/infrastructure/repositories/role/role.repository';

@Injectable()
export class RoleService {
    
    constructor(private roleRepository: RoleRepositoryImpl) {}

    async save(data: Prisma.RoleCreateInput): Promise<Role> {
        return this.roleRepository.save(data);
    }

    async getRoles(): Promise<Role[]> {
        return this.roleRepository.getRoles();
    }

    async getRoleById(id: number): Promise<Role> {
        return this.roleRepository.getRoleById(id);
    }
}
