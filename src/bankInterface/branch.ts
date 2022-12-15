import { Customers } from "./common"
import { Branchs } from "./common";

export class Branch implements Partial<Branchs>{
    name:string
    customers:Array<Customers>
    constructor(name:string,customers?:Array<Customers>){
        this.name =name;
        this.customers = []
    }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    }
    addCustomer(customer:Customers):boolean{
        return this.customers.push(customer) ? true:false;
    }
    findCustomer(customerid:number){
        this.customers.map((ele)=>{
            if(ele.getId() === customerid){
                console.log(ele)
            }
        })
    }

}