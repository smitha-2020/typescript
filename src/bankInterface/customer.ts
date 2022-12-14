import { Transactions } from "./common"
import { Transaction } from "./transaction";
import { Customers } from "./common";

export class Customer implements Customers{
        static key:number = 1
        id=0;
        transactions:Array<Transactions>
        constructor(private name:string){   
            this.name =name;
            this.id = Customer.key++;
            this.transactions = [];
        }
        getName(){
            return this.name;
        }
        getId(){
            return this.id;    
        }
        getTransactions(){
           return this.transactions;
        }
        getBalance(){
            const amonts:number[] = [];
            let balance:number =0;
            this['transactions'].map((transaction1)=>{
                amonts.push(transaction1['amount'])
            });
            balance = amonts.reduce(function(a, b){ return a + b;},0); 
            return balance;
        }
        addTransactions(amount:number){
            const balance:number =this.getBalance();
            console.log(this.getBalance())
            if(balance+amount > 0){
                const t:Transactions= new Transaction(amount);
                this['transactions'].push(t)
                return true;
            }
            else{
                //throw new Error("Insufficient Balance")
                return false;
            }
        }
    }
    