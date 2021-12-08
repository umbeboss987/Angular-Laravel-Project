import { Product } from "./Product";
import { User } from "./user";

export interface Cart {
    id: number;
    user: User;
    product: Product;
    quantity: number;
    sub_total: number;
}