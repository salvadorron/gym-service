import { Injectable } from "@nestjs/common";
import { Membership, Prisma } from "@prisma/client"
import { MembershipRepository } from "src/domain/repositories/membership/membership.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class MembershipRepositoryImpl implements MembershipRepository {
    constructor(private prisma: PrismaService) {}
    
    save(data: Prisma.MembershipCreateInput): Promise<Membership> {
        throw new Error("Method not implemented.");
    }
    getMemberships(): Promise<Membership[]> {
        throw new Error("Method not implemented.");
    }
    getMembershipById(id: number): Promise<Membership> {
        throw new Error("Method not implemented.");
    }
    


}