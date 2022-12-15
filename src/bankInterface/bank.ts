// import { Branchs } from "./branch";
// import { Transactions } from "./transaction";

// import { Customers } from "./customer";

import { Branchs } from "./common";
import { Customers } from "./common";
import { Transaction } from "./transaction";
import { Transactions } from "./common";

export class Bank{
    name:string
    branches:Array<Branchs>

    
    constructor(name:string,branches?:Array<Branchs>){
        this.name=name;
        this.branches = [];  
    }
    // branchExists(branchArray:Array<Branchs>,newBranch:Branchs):number{
    //     const branchExists=this.branches.filter((branchname)=>{return branchname.name === newBranch.name});
    //     return branchExists.length;
    // }
    addBranch(newbranch:Branchs):boolean{
        if(this.checkBranch(newbranch)>0){
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
        let transactions:Array<Transactions> = [];
        transactions.push(t)  
        this.branches.map((branch) => {
            // console.log(branch);
            // console.log(branchname.name)
            if(branch.name === branchname.name)
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
        const branchExists=this.branches.filter((branchname)=>{return branchname.name === branch.name});
        return branchExists.length;
    }
    listCustomers(branch:Branchs,checkbranch:boolean){
        const arrBranch:string[] = []
    
    this.branches.map((branchname)=>{
             arrBranch.push(branchname.name)
             //console.log(branchname)
    });
    if(checkbranch){
        this.branches.map((branchname)=>{
            if(branchname.name === branch.name){
                console.log(branchname)
                branchname.customers?.forEach((element)=>{
                        console.log(element.getName())
                    element.getTransactions()?.map((transact)=>{
                        console.log(transact)
                    })
                });
            }
        });
    }
       if(arrBranch.indexOf(branch.name)>=0){
            return true;
       }else{
           return  false;
       }
       
    }
    
}