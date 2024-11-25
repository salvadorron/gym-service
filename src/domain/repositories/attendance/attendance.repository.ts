import { Prisma } from "@prisma/client";

export default interface AttendanceRepository {
    save(data: Prisma.AttendanceCreateInput): Promise<Prisma.AttendanceCreateInput>
    getAttendances(): Promise<Prisma.AttendanceCreateInput[]>
    getAttendanceById(id: number): Promise<Prisma.AttendanceCreateInput>
}