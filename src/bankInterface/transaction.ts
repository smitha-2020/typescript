import { Transactions } from "./common";
export class Transaction implements Partial<Transactions>{
    amount:number
    transactiondate:Date
    constructor(amount:number){
        this.amount = amount;
        this.transactiondate = new Date();
    }
}