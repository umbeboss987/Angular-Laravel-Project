import { Address } from "./Address";
import { Product } from "./Product";
import { User } from "./User";

export interface Order{
    id: number;
    user: User;
    address : Address;
    code: number;
    created_at : Date;
    total : number;
    product : Product[];
}