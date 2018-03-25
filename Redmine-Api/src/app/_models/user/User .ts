import { RedmineInfo } from './RedmineInfo';
import { Role } from './Role ';
export class User {
    userId: number;
    userName: string;
    password: string;
    fullName: string;
    email: string;
    status: number;
    permission: Role[];
    redmineInfo: RedmineInfo ;
    lastPasswordchange: any;
}
