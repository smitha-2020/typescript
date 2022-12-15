import { Customers } from "./common"
import { Branchs } from "./common";

export class Branch implements Partial<Branchs>{
    name:string
    customers:Array<Customers>
    constructor(name:string,customers?:Array<Customers>){
        this.name =name;
        this.customers = []
    }
    // addCustomerTransaction(id:string,numb:number){

    // }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    }

    addCustomer(customer:Customers):boolean{
        return this.customers.push(customer) ? true:false;

    }

    // addCustomerTransaction(){

    //     //  - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.
    // }
    findCustomer(customerid:number){
        this.customers.map((ele)=>{
            if(ele.getId() === customerid){
                console.log(ele)
            }
        })
    }

}