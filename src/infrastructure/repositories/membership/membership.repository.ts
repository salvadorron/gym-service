import { HttpException, Injectable } from "@nestjs/common";
import { Membership, Prisma } from "@prisma/client"
import { MembershipRepository } from "src/domain/repositories/membership/membership.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class MembershipRepositoryImpl implements MembershipRepository {
    constructor(private prisma: PrismaService) {}
    
    async save(data: Prisma.MembershipCreateInput): Promise<Membership> {
        const membership = await this.prisma.membership.create({ data, include: { rate: true, clients: true } });
        return membership;
    }
    
    async getMemberships(): Promise<Membership[]> {
        const memberships = await this.prisma.membership.findMany({ include: { rate: true, clients: true } });
        return memberships;
    }

    async getOneMembership(name: string, type: string): Promise<Membership> {
        const membership = await this.prisma.membership.findFirst({ where: { name, type}, include: { rate: true, clients: true } });
        if(!membership) throw new HttpException('Membership not found', 404);
        return membership
    }
    


}