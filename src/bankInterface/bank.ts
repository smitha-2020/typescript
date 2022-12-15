// import { Branchs } from "./branch";
// import { Transactions } from "./transaction";

// import { Customers } from "./customer";

import { Branchs } from "./common";
import { Transactions } from "./common";
import { Customers } from "./common";
import { Transaction } from "./transaction";


export class Bank{
    name:string
    branches:Array<Branchs>
    constructor(name:string,branches?:Array<Branchs>){
        this.name=name;
        this.branches = [];  
    }
    branchExists(branchArray:Array<Branchs>,newBranch:Branchs):number{
        const branchExists=this.branches.filter((branchname)=>{return branchname.name === newBranch.name});
        return branchExists.length;
    }
    addBranch(newbranch:Branchs):boolean{
        if(this.branchExists(this.branches,newbranch)>0){
            return false;
        }else{
            [...this.branches]=[...this.branches,newbranch];
            return true;
        }
    }
    addCustomer(branchname:Branchs,customername:Customers){
        return branchname.customers?.push(customername)?true:false;
    }
    addCustomerTransaction(branchname:Branchs,customerid:number, amount:number){
        const t:Transactions= new Transaction(amount);
        // console.log(t)
        const transactions:Array<Transactions> = [];
        transactions.push(t)  
        this.branches.map((branch) => {
            if(branch.name == branchname.name)
            {
                branch.customers?.map((customer)=>{
                    if(customer.getId() === customerid){
                       customer.getTransactions()?.push(t)
                    }
                })
            }
        })
    }
    findBranchByName(name:string):null | string[]{
        let branchList:string[] = [];
        this.branches.map((branch)=>{
             if((branch.name == name)){
                branchList.push(name)
             }
        });
        return branchList.length>0?branchList:null
        // return branchnames.length>0?branchnames :null;  null|Array<string>
        
    }
    checkBranch(branch:Branchs){
      console.log(this.branches)
    }
    listCustomers(branch:Branchs,checkbranch:boolean){
        const arrBranch:string[] = []
        if(checkbranch){
            this.branches.map((branchname)=>{
                if(branchname.name == branch.name){
                    branchname.customers?.forEach((element)=>{
                        element.getTransactions()?.map((transact)=>{
                            console.log(transact)
                        })
                    });
                }
            });
        }
    this.branches.map((branchname)=>{
             arrBranch.push(branchname.name)
             //console.log(branchname)
    });
       if(arrBranch.indexOf(branch.name)>=0){
            return true;
       }else{
           return  false;
       }
    }
}