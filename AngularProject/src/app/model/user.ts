import { Order } from "./Order";
import { Image } from "./Image";



export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: number;
    order : Order[];
    image : Image;
}