export interface OrderAllAccounts{
    total : number;
    created_at : Date;
    code : string;
    total_amount : number;
    user: {
        username : string;
        email : string;
    }
}