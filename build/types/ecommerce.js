"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    // arr:Array<User> = [];
    function List() {
        var _this = _super.call(this) || this;
        Object.setPrototypeOf(_this, List.prototype);
        return _this;
    }
    /* fix function fetchAll to save data in the array once the fetching is successful*/
    List.prototype.fetchAll = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var jsondata, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        jsondata = _a.sent();
                        return [4 /*yield*/, jsondata.json()];
                    case 2:
                        data = _a.sent();
                        if ('message' in data) {
                            throw new Error("Data is not Valid");
                        }
                        this.push(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /* complete the function sortList() with a parameter "order", which can be
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    List.prototype.sortList = function (order) {
        switch (order) {
            case 'desc': {
                return this.sort(function (a, b) { return b.id - a.id; });
                break;
            }
            case 'asc': {
                return this.sort(function (a, b) { return b.id - a.id; });
                break;
            }
            default: {
                break;
            }
        }
    };
    /* complete method push(), which overrides original "push" method. New item can be added to the array if
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    // push(...items: T[]): number {
    //     function checkAvailability(arr:T[], id:number) { //From mozilla docs
    //         return arr.some(arrVal => id === arrVal.id);
    //     }
    //     const arrResult =items.map(newItem => checkAvailability(this, newItem.id)) 
    //     console.log(arrResult)
    //     if(!arrResult.includes(true)){
    //         return 1;
    //     }else{
    //         for(let i=0; i<items.length;i++){
    //             this[this.length] = items[i]
    //         }
    //         return 0;
    //    }
    // }
    List.prototype.push = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var result = items.map(function (item) { return _this.some(function (original) { return original.id === item.id; }); });
        //let result = items.map(item => console.log(item))
        console.log(result[1]);
        //console.log(result)
        // if(result.includes(true)) {
        //     return 0
        // }
        // for(let i=0; i<items.length;i++){
        //     this[this.length] = items[i]
        // }
        return 1;
    };
    return List;
}(Array));
exports.List = List;
