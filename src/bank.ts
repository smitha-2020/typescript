
import { Bank } from "./bankInterface/bank";
import { Branch } from "./bankInterface/branch";
import { Customer } from "./bankInterface/customer";




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




