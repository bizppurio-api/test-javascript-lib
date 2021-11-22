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
exports.RCSSend = void 0;
var Send_1 = require("./Send");
var RCSSend = /** @class */ (function (_super) {
    __extends(RCSSend, _super);
    function RCSSend(tokenIssuer) {
        var _this = _super.call(this, tokenIssuer, "rcs") || this;
        _this.content.rcs = _this.contentDetail;
        return _this;
    }
    RCSSend.prototype.message = function (message) {
        this.contentDetail.message = message;
        return this;
    };
    RCSSend.prototype.messagebaseid = function (messagebaseid) {
        this.contentDetail.messagebaseid = messagebaseid;
        return this;
    };
    RCSSend.prototype.chatbotid = function (chatbotid) {
        this.contentDetail.chatbotid = chatbotid;
        return this;
    };
    RCSSend.prototype.agencyid = function (agencyid) {
        this.contentDetail.agencyid = agencyid;
        return this;
    };
    RCSSend.prototype.header = function (header) {
        this.contentDetail.header = header;
        return this;
    };
    RCSSend.prototype.footer = function (footer) {
        this.contentDetail.footer = footer;
        return this;
    };
    RCSSend.prototype.copyallowed = function (copyallowed) {
        this.contentDetail.copyallowed = copyallowed;
        return this;
    };
    RCSSend.prototype.button = function () {
        var button = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            button[_i] = arguments[_i];
        }
        this.contentDetail.button = button;
        return this;
    };
    RCSSend.prototype.resendFirst = function (first) {
        return _super.prototype.resendFirst.call(this, first);
    };
    RCSSend.prototype.resendSecond = function (second) {
        return _super.prototype.resendSecond.call(this, second);
    };
    RCSSend.prototype.validation = function () {
        this.requiredFieldByType.push('content.rcs.messagebaseid');
        this.requiredFieldByType.push('content.rcs.message');
        this.requiredFieldByType.push('content.rcs.chatbotid');
        this.requiredFieldByType.push('content.rcs.header');
        this.maxFiledByType.set('content.rcs.messagebaseid', 40);
        this.maxFiledByType.set('content.rcs.chatbotid', 40);
        this.maxFiledByType.set('content.rcs.header', 1);
        var header = this.contentDetail.header;
        if (header && header === '1') {
            this.requiredFieldByType.push('content.rcs.footer');
            this.maxFiledByType.set('content.rcs.footer', 64);
        }
        var response = _super.prototype.validation.call(this);
        if (response)
            return response;
        return this.resendValidation(this.requestBody);
    };
    return RCSSend;
}(Send_1.Send));
exports.RCSSend = RCSSend;
