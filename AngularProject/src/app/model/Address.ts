import { User } from "./User";

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