"use strict";
// import { Branchs } from "./branch";
// import { Transactions } from "./transaction";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var transaction_1 = require("./transaction");
var Bank = /** @class */ (function () {
    function Bank(name, branches) {
        this.name = name;
        this.branches = [];
    }
    Bank.prototype.branchExists = function (branchArray, newBranch) {
        var branchExists = this.branches.filter(function (branchname) { return branchname.name === newBranch.name; });
        return branchExists.length;
    };
    Bank.prototype.addBranch = function (newbranch) {
        if (this.branchExists(this.branches, newbranch) > 0) {
            return false;
        }
        else {
            this.branches = __spreadArray(__spreadArray([], this.branches, true), [newbranch], false).slice(0);
            return true;
        }
    };
    Bank.prototype.addCustomer = function (branchname, customername) {
        var _a;
        return ((_a = branchname.customers) === null || _a === void 0 ? void 0 : _a.push(customername)) ? true : false;
    };
    Bank.prototype.addCustomerTransaction = function (branchname, customerid, amount) {
        var t = new transaction_1.Transaction(amount);
        // console.log(t)
        var transactions = [];
        transactions.push(t);
        this.branches.map(function (branch) {
            var _a;
            if (branch.name == branchname.name) {
                (_a = branch.customers) === null || _a === void 0 ? void 0 : _a.map(function (customer) {
                    var _a;
                    if (customer.getId() === customerid) {
                        (_a = customer.getTransactions()) === null || _a === void 0 ? void 0 : _a.push(t);
                    }
                });
            }
        });
    };
    Bank.prototype.findBranchByName = function (name) {
        var branchList = [];
        this.branches.map(function (branch) {
            if ((branch.name == name)) {
                branchList.push(name);
            }
        });
        return branchList.length > 0 ? branchList : null;
        // return branchnames.length>0?branchnames :null;  null|Array<string>
    };
    Bank.prototype.checkBranch = function (branch) {
        console.log(this.branches);
    };
    Bank.prototype.listCustomers = function (branch, checkbranch) {
        var arrBranch = [];
        if (checkbranch) {
            this.branches.map(function (branchname) {
                var _a;
                if (branchname.name == branch.name) {
                    (_a = branchname.customers) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
                        var _a;
                        (_a = element.getTransactions()) === null || _a === void 0 ? void 0 : _a.map(function (transact) {
                            console.log(transact);
                        });
                    });
                }
            });
        }
        this.branches.map(function (branchname) {
            arrBranch.push(branchname.name);
            //console.log(branchname)
        });
        if (arrBranch.indexOf(branch.name) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Bank;
}());
exports.Bank = Bank;
