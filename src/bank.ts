
import { Bank } from "./bankInterface/bank";
import { Branch } from "./bankInterface/branch";
import { Customer } from "./bankInterface/customer";

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")

const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)


arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), 3000)

//console.log(arizonaBank.branches[1].customers)
console.log(customer1.addTransactions(-1000))
console.log(customer1.getBalance())

console.log(arizonaBank.listCustomers(westBranch, true))





