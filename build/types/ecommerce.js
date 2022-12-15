"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List extends Array {
    constructor() {
        super();
        Object.setPrototypeOf(this, List.prototype);
    }
    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url) {
        const jsondata = await fetch(url);
        const data = await jsondata.json();
        console.log(data);
        return data;
    }
}
exports.List = List;
