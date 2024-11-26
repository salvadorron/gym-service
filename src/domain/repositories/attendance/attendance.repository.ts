import { Attendance, Prisma } from "@prisma/client";

export default interface AttendanceRepository {
    save(data: Prisma.AttendanceCreateInput): Promise<Attendance>
    getAttendances(): Promise<Attendance[]>
    getAttendanceById(id: number): Promise<Attendance>
}