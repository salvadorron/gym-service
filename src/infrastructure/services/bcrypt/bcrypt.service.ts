import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {

    async hash(password: string): Promise<string> {
        const hashedPassword = bcrypt.hash(password, 12);
        return hashedPassword
    }
    async compare(password: string, hash: string): Promise<boolean> {
        const isValid = bcrypt.compare(password, hash);
        return isValid
    }

}