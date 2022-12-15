
export interface Branchs{
    name:string
    customers?:Array<Customers>
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
