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
exports.LMSSend = void 0;
var Send_1 = require("./Send");
var LMSSend = /** @class */ (function (_super) {
    __extends(LMSSend, _super);
    function LMSSend(tokenIssuer) {
        var _this = _super.call(this, tokenIssuer, "lms") || this;
        _this.content.lms = _this.contentDetail;
        return _this;
    }
    LMSSend.prototype.message = function (message) {
        this.contentDetail.message = message;
        return this;
    };
    LMSSend.prototype.subject = function (subject) {
        this.contentDetail.subject = subject;
        return this;
    };
    LMSSend.prototype.validation = function () {
        this.requiredFieldByType.push('content.lms.message');
        this.maxFiledByType.set('content.lms.message', 2000);
        this.maxFiledByType.set('content.lms.subject', 64);
        return _super.prototype.validation.call(this);
    };
    return LMSSend;
}(Send_1.Send));
exports.LMSSend = LMSSend;
