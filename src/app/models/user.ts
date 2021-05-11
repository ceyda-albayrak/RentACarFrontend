import { Byte } from "@angular/compiler/src/util";
export class User{
    id:number
    firstName:string
    lastName:string
    email:string
    passwordHash: Byte[];
    passwordSalt: Byte[];
    password:string;
    status?:boolean
    findexPoint:number
}