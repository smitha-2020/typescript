import { Customers } from "./common"
import { Branchs } from "./common";

export class Branch implements Partial<Branchs>{
    customers:Array<Customers>
    constructor(private name:string|null){
        this.name =name;
        this.customers = []
    }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    }
    addCustomer(customer:Customers){
        if(!this.customers.some((cust) => cust.getName() === customer.getName())){
            return this.customers.push(customer) ? true:null;
        } 
    }
    findCustomer(customerid:number){
        this.customers.map((ele)=>{
            if(ele.getId() === customerid){
                console.log(ele)
            }
        })
    }

}