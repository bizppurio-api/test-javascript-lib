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
exports.SMSFactory = void 0;
var SMSResend_1 = require("../../action/resend/SMSResend");
var SMSSend_1 = require("../../action/send/SMSSend");
var MessageFacotry_1 = require("./MessageFacotry");
var SMSFactory = /** @class */ (function (_super) {
    __extends(SMSFactory, _super);
    function SMSFactory(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    SMSFactory.prototype.sendAction = function (refkey, to, from, message) {
        return new SMSSend_1.SMSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message);
    };
    SMSFactory.prototype.createResend = function (message) {
        return new SMSResend_1.SMSResend().message(message);
    };
    return SMSFactory;
}(MessageFacotry_1.MessageFactory));
exports.SMSFactory = SMSFactory;
