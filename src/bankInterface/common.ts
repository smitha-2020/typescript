
export interface Branchs{
    getName():string|null,
    getCustomers():Array<Customers> |null,
    customers:Array<Customers>
}
export interface Customers{
    getName():string| null
    getId():number
    getTransactions():Array<Transactions> | null
}
export interface Transactions{
    amount:number
    transactiondate:Date
}
