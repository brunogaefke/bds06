import { Roles } from "./roles";

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    roles: Roles;
}