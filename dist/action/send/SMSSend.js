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
exports.SMSSend = void 0;
var Send_1 = require("./Send");
var SMSSend = /** @class */ (function (_super) {
    __extends(SMSSend, _super);
    function SMSSend(tokenIssuer) {
        var _this = _super.call(this, tokenIssuer, "sms") || this;
        _this.content.sms = _this.contentDetail;
        return _this;
    }
    SMSSend.prototype.message = function (message) {
        this.contentDetail.message = message;
        return this;
    };
    SMSSend.prototype.validation = function () {
        this.requiredFieldByType.push('content.sms.message');
        this.maxFiledByType.set('content.sms.message', 90);
        return _super.prototype.validation.call(this);
    };
    return SMSSend;
}(Send_1.Send));
exports.SMSSend = SMSSend;
