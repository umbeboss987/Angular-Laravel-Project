import { User } from "./user";

export interface Address{
    id: number;
    user: User;
    city: string;
    postal_code: string;
    address: string;
    name: string;
    surname: string;
    telephone_number: string;
}