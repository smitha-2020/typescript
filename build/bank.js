"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./bankInterface/bank");
var branch_1 = require("./bankInterface/branch");
var customer_1 = require("./bankInterface/customer");
var arizonaBank = new bank_1.Bank("Arizona");
var westBranch = new branch_1.Branch("West Branch");
var sunBranch = new branch_1.Branch("Sun Branch");
// console.log(westBranch.getName());
var customer1 = new customer_1.Customer("John");
var customer2 = new customer_1.Customer("Anna");
var customer3 = new customer_1.Customer("John");
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
var customer4 = new customer_1.Customer("Smitha");
westBranch.addCustomer(customer4);
westBranch.getCustomers();
westBranch.findCustomer(customer4.getId());
