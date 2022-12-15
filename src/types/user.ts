import { Entity } from "./common";


export interface User extends Entity{
    /* complete User interface with some chosen properties */
    name: string
    avatar: string
    email:string 
    password:string 
    role: string
    id: number
}