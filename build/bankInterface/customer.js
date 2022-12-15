"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var transaction_1 = require("./transaction");
var Customer = /** @class */ (function () {
    function Customer(name, id) {
        if (id === void 0) { id = 0; }
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = Customer.key++;
        this.transactions = [];
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.getTransactions = function () {
        return this.transactions;
    };
    Customer.prototype.getBalance = function () {
        var amonts = [];
        var balance = 0;
        this['transactions'].map(function (transaction1) {
            amonts.push(transaction1['amount']);
        });
        balance = amonts.reduce(function (a, b) { return a + b; });
        return balance;
    };
    Customer.prototype.addTransactions = function (amount) {
        var balance = this.getBalance();
        if (balance + amount > 0) {
            var t = new transaction_1.Transaction(amount);
            this['transactions'].push(t);
            return true;
        }
        else {
            return false;
        }
    };
    Customer.key = 1;
    return Customer;
}());
exports.Customer = Customer;
