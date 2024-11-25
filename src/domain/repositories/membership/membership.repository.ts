import { Membership, Prisma } from "@prisma/client"

export interface MembershipRepository {
    save(data: Prisma.MembershipCreateInput): Promise<Membership>
    getMemberships(): Promise<Membership[]>
    getMembershipById(id: number): Promise<Membership>
}