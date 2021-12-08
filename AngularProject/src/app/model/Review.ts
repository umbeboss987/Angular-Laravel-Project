import { Product } from "./Product";
import { User } from "./User";

export interface Review {
    id:number;
    username:string;
    user: User;
    product: Product;
    review: string;
}