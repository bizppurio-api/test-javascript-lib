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
exports.LMSResend = void 0;
var Resend_1 = require("./Resend");
var LMSResend = /** @class */ (function (_super) {
    __extends(LMSResend, _super);
    function LMSResend() {
        return _super.call(this, "lms") || this;
    }
    LMSResend.prototype.message = function (message) {
        this.recontentDetail.message = message;
        return this;
    };
    LMSResend.prototype.subject = function (subject) {
        this.recontentDetail.subject = subject;
        return this;
    };
    LMSResend.prototype.validation = function (requestBody) {
        this.requiredFieldByType.push('recontent.lms.message');
        this.maxFiledByType.set('recontent.lms.message', 2000);
        this.maxFiledByType.set('recontent.lms.subject', 64);
        return _super.prototype.validation.call(this, requestBody);
    };
    return LMSResend;
}(Resend_1.Resend));
exports.LMSResend = LMSResend;
