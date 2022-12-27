// import { Branchs } from "./branch";
// import { Transactions } from "./transaction";

// import { Customers } from "./customer";

import { Branchs } from "./common";
import { Customers } from "./common";
import { Transaction } from "./transaction";
import { Transactions } from "./common";
import { Customer } from "./customer";

export class Bank {
    name: string
    branches: Array<Branchs>
    constructor(name: string, branches?: Array<Branchs>) {
        this.name = name;
        this.branches = [];
    }
    // branchExists(branchArray:Array<Branchs>,newBranch:Branchs):number{
    //     const branchExists=this.branches.filter((branchname)=>{return branchname.name === newBranch.name});
    //     return branchExists.length;
    // }
    addBranch(newbranch: Branchs): boolean {
        if (!this.checkBranch2(newbranch)) {
            [...this.branches] = [...this.branches, newbranch];
            return true;
        } else {
            return false;
        }
    }
    addCustomer(branchname: Branchs, customername: Customers) {
        console.log(this.checkBranch2(branchname) && (customername.getName()) && !this.checkcustomerBranch(branchname, customername))
        if(this.checkBranch2(branchname) && (customername.getName()) && !this.checkcustomerBranch(branchname, customername))
        {
            return branchname.customers?.push(customername) ? true : false;
        }
    }
    checkcustomerBranch(branchname: Branchs, customername: Customers) {
        return branchname.customers?.some((data) => data.getName() === customername.getName())
    }
    check(customerid: number, customer: Customers) {
        console.log(customer.getId())
        return (customerid === customer.getId()) ? customer : 0
    }
    checkAvailabilty(branchname: Branchs, customerid: number) {
        // console.log(branchname)
        return [branchname.customers?.map((customer) => { return this.check(customerid, customer) })]
    }
    checkCustomerIds(branchname: Branchs, customerid: number) {
        branchname.customers?.map((customer) => {
            return this.checkAvailabilty(branchname, customerid) ? customer.getTransactions() : null;
        })
    }
    checkCustomer(branchname: Branchs, customerid: number) {
        this.branches.map((branch) => {
            // console.log(this.checkCustomerIds(branchname,customerid))
            return branch.getName() === branchname.getName() ? this.checkCustomerIds(branch, customerid) : null;
        })
    }
    addCustomerTransaction(branchname: Branchs, customerid: number, amount: number) {
        const t: Transactions = new Transaction(amount);
        // console.log(t)
        // let transactions:Array<Transactions> = [];
        // transactions.push(t)  
        //console.log(this.checkCustomer(branchname,customerid))

        // this.branches.map((branch)=>{
        //     return branch.name === branchname.name? this.checkCustomerIds(branch,customerid) : null;  
        // })
        this.branches.map((branch) => {
            if (branch.getName() === branchname.getName()) {
                branch.customers?.map((customer) => {
                    if (customer.getId() === customerid) {
                        customer.getTransactions()?.push(t)
                    }
                })
            }
        })
    }
    findBranchByName(name: string): null | string[] {
        let branchList: string[] = [];
        this.branches.map((branch) => {
            if ((branch.getName() == name)) {
                branchList.push(name)
            }
        });
        return branchList.length > 0 ? branchList : null
        // return branchnames.length>0?branchnames :null;  null|Array<string>
    }
    checkBranch(branch: Branchs) {
        const branchExists = this.branches.filter((branchname) => { return branchname.getName() === branch.getName() });
        return branchExists.length;
    }
    checkBranch2(branch: Branchs) {
        return this.branches.some((branchname) => branchname.getName() === branch.getName() );
    }

    listCustomers(branch: Branchs, checkbranch: boolean) {
        const arrBranch: string[] = []
        if(this.checkBranch2(branch) && checkbranch){
            branch.getCustomers()?.map((customer) => {
                console.log(customer.getTransactions())
            })

        }else if(this.checkBranch2(branch)){
            return true;
        }else{
            return false;
        }

        // this.branches.map((branchname) => {
        //     arrBranch.push(branchname.getName())
        //     //console.log(branchname)
        // });
        // if (checkbranch) {
        //     this.branches.map((branchname) => {
        //         if (branchname.name === branch.name) {
        //             console.log(branchname)
        //             branchname.customers?.forEach((element) => {
        //                 console.log(element.getName())
        //                 element.getTransactions()?.map((transact) => {
        //                     console.log(transact)
        //                 })
        //             });
        //         }
        //     });
        // }
        // if (arrBranch.indexOf(branch.name) >= 0) {
        //     return true;
        // } else {
        //     return false;
        // }

    }

}