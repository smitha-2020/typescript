"use strict";
class Bank {
    constructor(name, branches) {
        this.name = name;
        this.branches = [];
    }
    branchExists(branchArray, newBranch) {
        const branchExists = this.branches.filter((branchname) => { return branchname.name === newBranch.name; });
        return branchExists.length;
    }
    addBranch(newbranch) {
        if (this.branchExists(this.branches, newbranch) > 0) {
            return false;
        }
        else {
            [...this.branches] = [...this.branches, newbranch];
            return true;
        }
    }
    addCustomer(branchname, customername) {
        var _a;
        return ((_a = branchname.customers) === null || _a === void 0 ? void 0 : _a.push(customername)) ? true : false;
    }
    addCustomerTransaction(branchname, customerid, amount) {
        const t = new Transaction(amount);
        // console.log(t)
        const transactions = [];
        transactions.push(t);
        this.branches.map((branch) => {
            var _a;
            if (branch.name == branchname.name) {
                (_a = branch.customers) === null || _a === void 0 ? void 0 : _a.map((customer) => {
                    var _a;
                    if (customer.getId() === customerid) {
                        (_a = customer.getTransactions()) === null || _a === void 0 ? void 0 : _a.push(t);
                    }
                });
            }
        });
    }
    findBranchByName(name) {
        let branchList = [];
        this.branches.map((branch) => {
            if ((branch.name == name)) {
                branchList.push(name);
            }
        });
        return branchList.length > 0 ? branchList : null;
        // return branchnames.length>0?branchnames :null;  null|Array<string>
    }
    checkBranch(branch) {
        console.log(this.branches);
    }
    listCustomers(branch, checkbranch) {
        const arrBranch = [];
        if (checkbranch) {
            this.branches.map((branchname) => {
                var _a;
                if (branchname.name == branch.name) {
                    (_a = branchname.customers) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
                        var _a;
                        (_a = element.getTransactions()) === null || _a === void 0 ? void 0 : _a.map((transact) => {
                            console.log(transact);
                        });
                    });
                }
            });
        }
        this.branches.map((branchname) => {
            arrBranch.push(branchname.name);
            //console.log(branchname)
        });
        if (arrBranch.indexOf(branch.name) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Branch {
    constructor(name, customers) {
        this.name = name;
        this.customers = [];
    }
    // addCustomerTransaction(id:string,numb:number){
    // }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        return this.customers.push(customer) ? true : false;
    }
    addCustomerTransaction() {
        //  - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.
    }
    findCustomer(customerid) {
        this.customers.map((ele) => {
            if (ele.getId() === customerid) {
                console.log(ele);
            }
        });
    }
}
class Customer {
    constructor(name, id = 0) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = Customer.key++;
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        const amonts = [];
        let balance = 0;
        this['transactions'].map((transaction1) => {
            amonts.push(transaction1['amount']);
        });
        balance = amonts.reduce(function (a, b) { return a + b; });
        return balance;
    }
    addTransactions(amount) {
        const balance = this.getBalance();
        if (balance + amount > 0) {
            const t = new Transaction(amount);
            this['transactions'].push(t);
            return true;
        }
        else {
            return false;
        }
    }
}
Customer.key = 1;
class Transaction {
    constructor(amount) {
        this.amount = amount;
        this.transactiondate = new Date();
    }
}
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
// console.log(westBranch.getName());
const customer1 = new Customer("John");
const customer2 = new Customer("Anna");
const customer3 = new Customer("John");
//console.log(customer1.getId())
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
//console.log(arizonaBank)
//arizonaBank.checkBranch(westBranch)
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
// console.log(arizonaBank)
//console.log(arizonaBank)
//console.log(arizonaBank.addCustomer(westBranch, customer1))
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
// console.log(arizonaBank.branches[0])
// console.log(arizonaBank.branches[1])
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), 3000);
//console.log(customer1.addTransactions(-1000))
// console.log(customer1.getTransactions())
//console.log(customer1.getBalance())
//console.log(arizonaBank.listCustomers(westBranch, true))
//console.log(arizonaBank.listCustomers(sunBranch,true))
// westBranch.getCustomers();
const customer4 = new Customer("Smitha");
westBranch.addCustomer(customer4);
westBranch.getCustomers();
westBranch.findCustomer(customer4.getId());
