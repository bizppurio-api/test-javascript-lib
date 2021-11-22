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
exports.RCSResend = void 0;
var Resend_1 = require("./Resend");
var RCSResend = /** @class */ (function (_super) {
    __extends(RCSResend, _super);
    function RCSResend() {
        return _super.call(this, "rcs") || this;
    }
    RCSResend.prototype.message = function (message) {
        this.recontentDetail.message = message;
        return this;
    };
    RCSResend.prototype.messagebaseid = function (messagebaseid) {
        this.recontentDetail.messagebaseid = messagebaseid;
        return this;
    };
    RCSResend.prototype.chatbotid = function (chatbotid) {
        this.recontentDetail.chatbotid = chatbotid;
        return this;
    };
    RCSResend.prototype.agencyid = function (agencyid) {
        this.recontentDetail.agencyid = agencyid;
        return this;
    };
    RCSResend.prototype.header = function (header) {
        this.recontentDetail.header = header;
        return this;
    };
    RCSResend.prototype.footer = function (footer) {
        this.recontentDetail.footer = footer;
        return this;
    };
    RCSResend.prototype.copyallowed = function (copyallowed) {
        this.recontentDetail.copyallowed = copyallowed;
        return this;
    };
    RCSResend.prototype.button = function () {
        var button = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            button[_i] = arguments[_i];
        }
        this.recontentDetail.button = button;
        return this;
    };
    RCSResend.prototype.validation = function (requestBody) {
        this.requiredFieldByType.push('recontent.rcs.messagebaseid');
        this.requiredFieldByType.push('recontent.rcs.message');
        this.requiredFieldByType.push('recontent.rcs.chatbotid');
        this.requiredFieldByType.push('recontent.rcs.header');
        this.maxFiledByType.set('recontent.rcs.messagebaseid', 40);
        this.maxFiledByType.set('recontent.rcs.chatbotid', 40);
        this.maxFiledByType.set('recontent.rcs.header', 1);
        var header = this.recontentDetail.header;
        if (header && header === '1') {
            this.requiredFieldByType.push('recontent.rcs.footer');
            this.maxFiledByType.set('recontent.rcs.footer', 64);
        }
        return _super.prototype.validation.call(this, requestBody);
    };
    return RCSResend;
}(Resend_1.Resend));
exports.RCSResend = RCSResend;
