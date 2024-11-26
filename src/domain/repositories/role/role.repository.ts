import { Prisma, Role } from "@prisma/client"

export interface RoleRepository {
    save(data: Prisma.RoleCreateInput): Promise<Role>
    getRoles(): Promise<Role[]>
    getRoleById(id: string): Promise<Role>
}