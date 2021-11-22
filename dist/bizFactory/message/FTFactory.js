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
exports.FTFactory = void 0;
var FTResend_1 = require("../../action/resend/FTResend");
var FTSend_1 = require("../../action/send/FTSend");
var MessageFacotry_1 = require("./MessageFacotry");
var FTFactory = /** @class */ (function (_super) {
    __extends(FTFactory, _super);
    function FTFactory(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    FTFactory.prototype.sendAction = function (refkey, to, from, message, senderkey) {
        return new FTSend_1.FTSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)
            .senderkey(senderkey);
    };
    FTFactory.prototype.createResend = function (message, senderkey) {
        return new FTResend_1.FTResend().message(message).senderkey(senderkey);
    };
    return FTFactory;
}(MessageFacotry_1.MessageFactory));
exports.FTFactory = FTFactory;
