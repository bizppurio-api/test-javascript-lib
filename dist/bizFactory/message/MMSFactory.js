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
exports.MMSFactory = void 0;
var MMSResend_1 = require("../../action/resend/MMSResend");
var MMSSend_1 = require("../../action/send/MMSSend");
var MMSSendFile_1 = require("../../action/send/MMSSendFile");
var MessageFacotry_1 = require("./MessageFacotry");
var MMSFactory = /** @class */ (function (_super) {
    __extends(MMSFactory, _super);
    function MMSFactory(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    MMSFactory.prototype.sendAction = function (refkey, to, from, message) {
        var _a;
        var filekeys = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            filekeys[_i - 4] = arguments[_i];
        }
        return (_a = new MMSSend_1.MMSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)).filekey.apply(_a, filekeys);
    };
    MMSFactory.prototype.sendFileAction = function (file) {
        return new MMSSendFile_1.MMSSendFile(this.tokenIssuer).file(file);
    };
    MMSFactory.prototype.createResend = function (message, subject) {
        var _a;
        var filekeys = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            filekeys[_i - 2] = arguments[_i];
        }
        return (_a = new MMSResend_1.MMSResend().message(message).subject(subject)).filekey.apply(_a, filekeys);
    };
    return MMSFactory;
}(MessageFacotry_1.MessageFactory));
exports.MMSFactory = MMSFactory;
