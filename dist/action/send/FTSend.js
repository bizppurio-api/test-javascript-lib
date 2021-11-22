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
exports.FTSend = void 0;
var Send_1 = require("./Send");
var BizapiUtil = require("../../common/BizapiUtil");
var BizapiDefine_1 = require("../../common/BizapiDefine");
var FTSend = /** @class */ (function (_super) {
    __extends(FTSend, _super);
    function FTSend(tokenIssuer) {
        var _this = _super.call(this, tokenIssuer, "ft") || this;
        _this.content.ft = _this.contentDetail;
        return _this;
    }
    FTSend.prototype.message = function (message) {
        this.contentDetail.message = message;
        return this;
    };
    FTSend.prototype.senderkey = function (senderkey) {
        this.contentDetail.senderkey = senderkey;
        return this;
    };
    FTSend.prototype.userkey = function (userkey) {
        this.contentDetail.userkey = userkey;
        return this;
    };
    FTSend.prototype.adflag = function (adflag) {
        this.contentDetail.adflag = adflag;
        return this;
    };
    FTSend.prototype.button = function () {
        var buttons = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            buttons[_i] = arguments[_i];
        }
        this.contentDetail.button = buttons;
        return this;
    };
    FTSend.prototype.image = function (image) {
        this.contentDetail.image = image;
        return this;
    };
    FTSend.prototype.wide = function (wide) {
        this.contentDetail.wide = wide;
        return this;
    };
    FTSend.prototype.resendFirst = function (first) {
        return _super.prototype.resendFirst.call(this, first);
    };
    FTSend.prototype.resendSecond = function (second) {
        return _super.prototype.resendSecond.call(this, second);
    };
    FTSend.prototype.validation = function () {
        var response = BizapiUtil.maxLength(this.requestBody, 'content.ft.message', 1000, this.requestBody.refkey);
        if (response)
            return response;
        var buttons = BizapiUtil.divideKey(this.requestBody, 'content.ft.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'ft.button format is an array.', refkey: this.requestBody.refkey };
            }
            for (var _i = 0, _a = Array.from(buttons); _i < _a.length; _i++) {
                var button = _a[_i];
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'The ft.button.name may not be greater than 28 characters.', refkey: this.requestBody.refkey };
                }
            }
        }
        this.requiredFieldByType.push('content.ft.message');
        this.requiredFieldByType.push('content.ft.senderkey');
        this.maxFiledByType.set('content.ft.senderkey', 40);
        response = _super.prototype.validation.call(this);
        if (response)
            return response;
        return this.resendValidation(this.requestBody);
    };
    return FTSend;
}(Send_1.Send));
exports.FTSend = FTSend;
