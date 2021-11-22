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
exports.LMSFactory = void 0;
var LMSResend_1 = require("../../action/resend/LMSResend");
var LMSSend_1 = require("../../action/send/LMSSend");
var MessageFacotry_1 = require("./MessageFacotry");
var LMSFactory = /** @class */ (function (_super) {
    __extends(LMSFactory, _super);
    function LMSFactory(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    LMSFactory.prototype.sendAction = function (refkey, to, from, message) {
        return new LMSSend_1.LMSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message);
    };
    LMSFactory.prototype.createResend = function (message, subject) {
        return new LMSResend_1.LMSResend().message(message).subject(subject);
    };
    return LMSFactory;
}(MessageFacotry_1.MessageFactory));
exports.LMSFactory = LMSFactory;
