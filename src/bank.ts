interface Branchs{
    name:string
    customers?:Array<Customers>
}
interface Customers{
    getName():string| null
    getId():number
    getTransactions():Array<Transactions> | null
}
interface Transactions{
    amount:number
    transactiondate:Date
}
class Bank{
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

class Branch implements Partial<Branchs>{
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

    addCustomerTransaction(){

        //  - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.
    }
    findCustomer(customerid:number){
        this.customers.map((ele)=>{
            if(ele.getId() === customerid){
                console.log(ele)
            }
        })
    }

}
class Customer implements Customers{
    static key:number = 1
    transactions:Array<Transactions>
    
    constructor(private name:string|null,private id:number=0){
       
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
        balance = amonts.reduce(function(a, b){ return a + b; }); 
        return balance;
        

    }
    addTransactions(amount:number){
        const balance:number =this.getBalance();
        if(balance+amount > 0){
            const t:Transactions= new Transaction(amount);
            this['transactions'].push(t)
            return true;
        }
        else{
            return false;
        }
    }
}

class Transaction implements Partial<Transactions>{
    amount:number
    transactiondate:Date
    constructor(amount:number){
        this.amount = amount;
        this.transactiondate = new Date();
    }
}

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")

// console.log(westBranch.getName());


const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")
//console.log(customer1.getId())


arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
//console.log(arizonaBank)
//arizonaBank.checkBranch(westBranch)


arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

// console.log(arizonaBank)

//console.log(arizonaBank)
//console.log(arizonaBank.addCustomer(westBranch, customer1))
arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)
// console.log(arizonaBank.branches[0])
// console.log(arizonaBank.branches[1])


arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), 3000)


//console.log(customer1.addTransactions(-1000))
// console.log(customer1.getTransactions())

//console.log(customer1.getBalance())

//console.log(arizonaBank.listCustomers(westBranch, true))
//console.log(arizonaBank.listCustomers(sunBranch,true))

// westBranch.getCustomers();
const customer4 = new Customer("Smitha")

westBranch.addCustomer(customer4)
westBranch.getCustomers()
westBranch.findCustomer(customer4.getId())




