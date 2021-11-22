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
exports.ATFactory = void 0;
var ATResend_1 = require("../../action/resend/ATResend");
var ATSend_1 = require("../../action/send/ATSend");
var MessageFacotry_1 = require("./MessageFacotry");
var ATFactory = /** @class */ (function (_super) {
    __extends(ATFactory, _super);
    function ATFactory(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    ATFactory.prototype.sendAction = function (refkey, to, from, message, senderkey, templatecode) {
        return new ATSend_1.ATSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)
            .senderkey(senderkey)
            .templatecode(templatecode);
    };
    ATFactory.prototype.createResend = function (message, senderkey, templatecode) {
        return new ATResend_1.ATResend().message(message).senderkey(senderkey).templatecode(templatecode);
    };
    return ATFactory;
}(MessageFacotry_1.MessageFactory));
exports.ATFactory = ATFactory;
