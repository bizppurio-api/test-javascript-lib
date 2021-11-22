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
exports.RCSFactory = void 0;
var RCSResend_1 = require("../../action/resend/RCSResend");
var RCSSend_1 = require("../../action/send/RCSSend");
var MessageFacotry_1 = require("./MessageFacotry");
var RCSFactory = /** @class */ (function (_super) {
    __extends(RCSFactory, _super);
    function RCSFactory(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    RCSFactory.prototype.sendAction = function (refkey, to, from, message, messagebaseid, chatbotid, header) {
        return new RCSSend_1.RCSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)
            .messagebaseid(messagebaseid)
            .chatbotid(chatbotid)
            .header(header);
    };
    RCSFactory.prototype.createResend = function (message, messagebaseid, chatbotid, header) {
        return new RCSResend_1.RCSResend()
            .message(message)
            .messagebaseid(messagebaseid)
            .chatbotid(chatbotid)
            .header(header);
    };
    return RCSFactory;
}(MessageFacotry_1.MessageFactory));
exports.RCSFactory = RCSFactory;
