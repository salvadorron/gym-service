import { Admin, Prisma } from "@prisma/client";

export interface AdminRepository {
    save(data: Prisma.AdminCreateInput): Promise<Admin>;
    getAdmins(): Promise<Admin[]>;
    getAdminById(id: number): Promise<Admin>;
}