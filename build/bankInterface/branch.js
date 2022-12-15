"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
var Branch = /** @class */ (function () {
    function Branch(name, customers) {
        this.name = name;
        this.customers = [];
    }
    // addCustomerTransaction(id:string,numb:number){
    // }
    Branch.prototype.getName = function () {
        return this.name;
    };
    Branch.prototype.getCustomers = function () {
        return this.customers;
    };
    Branch.prototype.addCustomer = function (customer) {
        return this.customers.push(customer) ? true : false;
    };
    // addCustomerTransaction(){
    //     //  - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.
    // }
    Branch.prototype.findCustomer = function (customerid) {
        this.customers.map(function (ele) {
            if (ele.getId() === customerid) {
                console.log(ele);
            }
        });
    };
    return Branch;
}());
exports.Branch = Branch;
