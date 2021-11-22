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
exports.ATSend = void 0;
var Send_1 = require("./Send");
var BizapiUtil = require("../../common/BizapiUtil");
var BizapiDefine_1 = require("../../common/BizapiDefine");
var ATSend = /** @class */ (function (_super) {
    __extends(ATSend, _super);
    function ATSend(tokenIssuer) {
        var _this = _super.call(this, tokenIssuer, "at") || this;
        _this.content.at = _this.contentDetail;
        return _this;
    }
    ATSend.prototype.message = function (message) {
        this.contentDetail.message = message;
        return this;
    };
    ATSend.prototype.senderkey = function (senderkey) {
        this.contentDetail.senderkey = senderkey;
        return this;
    };
    ATSend.prototype.templatecode = function (templatecode) {
        this.contentDetail.templatecode = templatecode;
        return this;
    };
    ATSend.prototype.button = function () {
        var button = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            button[_i] = arguments[_i];
        }
        this.contentDetail.button = button;
        return this;
    };
    ATSend.prototype.title = function (title) {
        this.contentDetail.title = title;
        return this;
    };
    ATSend.prototype.quickreply = function (quickreply) {
        this.contentDetail.quickreply = quickreply;
        return this;
    };
    ATSend.prototype.resendFirst = function (first) {
        return _super.prototype.resendFirst.call(this, first);
    };
    ATSend.prototype.resendSecond = function (second) {
        return _super.prototype.resendSecond.call(this, second);
    };
    ATSend.prototype.validation = function () {
        var response = BizapiUtil.maxLength(this.requestBody, 'content.at.message', 1000, this.requestBody.refkey);
        if (response)
            return response;
        var buttons = BizapiUtil.divideKey(this.requestBody, 'content.at.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'at.button format is an array.', refkey: this.requestBody.refkey };
            }
            for (var _i = 0, _a = Array.from(buttons); _i < _a.length; _i++) {
                var button = _a[_i];
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'The at.button.name may not be greater than 28 characters.', refkey: this.requestBody.refkey };
                }
            }
        }
        this.requiredFieldByType.push('content.at.message');
        this.requiredFieldByType.push('content.at.senderkey');
        this.requiredFieldByType.push('content.at.templatecode');
        this.maxFiledByType.set('content.at.senderkey', 40);
        this.maxFiledByType.set('content.at.templatecode', 32);
        response = _super.prototype.validation.call(this);
        if (response)
            return response;
        return this.resendValidation(this.requestBody);
    };
    return ATSend;
}(Send_1.Send));
exports.ATSend = ATSend;
