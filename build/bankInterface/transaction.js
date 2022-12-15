"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(amount) {
        this.amount = amount;
        this.transactiondate = new Date();
    }
    return Transaction;
}());
exports.Transaction = Transaction;
