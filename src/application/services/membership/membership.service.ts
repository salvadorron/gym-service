import { Injectable } from "@nestjs/common";
import { Membership, Prisma } from "@prisma/client"
import { CreateMembershipDto } from "src/domain/model/membership/create-membership.dto";
import { MembershipRepositoryImpl } from "src/infrastructure/repositories/membership/membership.repository";

@Injectable()
export class MembershipService {
    constructor(private membershipRepository: MembershipRepositoryImpl) {}
    
    async save(createMembershipDto: CreateMembershipDto): Promise<Membership> {

        const start_date = new Date();
        const end_date = new Date();

        if (createMembershipDto.type === 'Monthly') {
            end_date.setMonth(start_date.getMonth() + 1);
        }

        if(createMembershipDto.type === 'Yearly') {
            end_date.setFullYear(start_date.getFullYear() + 1);
        }

        const membership = await this.membershipRepository.save({
            start_date,
            end_date,
            name: createMembershipDto.name,
            type: createMembershipDto.type,
            rate: {
                create: {
                    amount: createMembershipDto.price
                }
            },
        });
        return membership;
    }
    async getMemberships(): Promise<Membership[]> {
        const memberships = await this.membershipRepository.getMemberships();
        return memberships;
    }
    async getOneMembership(name: string, type: string): Promise<Membership> {
        const membership = await this.membershipRepository.getOneMembership(name, type);
        return membership;
    }
    


}