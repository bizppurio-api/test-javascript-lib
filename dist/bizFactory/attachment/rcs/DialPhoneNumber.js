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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialPhoneNumber = void 0;
var RcsAction_1 = require("./RcsAction");
var DialPhoneNumber = /** @class */ (function (_super) {
    __extends(DialPhoneNumber, _super);
    function DialPhoneNumber(displayText) {
        var _this = _super.call(this, displayText) || this;
        _this.action.dialerAction = {
            dialPhoneNumber: {}
        };
        return _this;
    }
    DialPhoneNumber.prototype.phoneNumber = function (phoneNumber) {
        this.action.dialerAction.dialPhoneNumber.phoneNumber = phoneNumber;
        return this;
    };
    return DialPhoneNumber;
}(RcsAction_1.RcsAction));
exports.DialPhoneNumber = DialPhoneNumber;
