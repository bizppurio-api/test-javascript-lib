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
exports.FTResend = void 0;
var Resend_1 = require("./Resend");
var BizapiUtil = require("../../common/BizapiUtil");
var BizapiDefine_1 = require("../../common/BizapiDefine");
var FTResend = /** @class */ (function (_super) {
    __extends(FTResend, _super);
    function FTResend() {
        return _super.call(this, "ft") || this;
    }
    FTResend.prototype.message = function (message) {
        this.recontentDetail.message = message;
        return this;
    };
    FTResend.prototype.senderkey = function (senderkey) {
        this.recontentDetail.senderkey = senderkey;
        return this;
    };
    FTResend.prototype.userkey = function (userkey) {
        this.recontentDetail.userkey = userkey;
        return this;
    };
    FTResend.prototype.adflag = function (adflag) {
        this.recontentDetail.adflag = adflag;
        return this;
    };
    FTResend.prototype.button = function () {
        var buttons = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            buttons[_i] = arguments[_i];
        }
        this.recontentDetail.button = buttons;
        return this;
    };
    FTResend.prototype.image = function (image) {
        this.recontentDetail.image = image;
        return this;
    };
    FTResend.prototype.wide = function (wide) {
        this.recontentDetail.wide = wide;
        return this;
    };
    FTResend.prototype.validation = function (requestBody) {
        var response = BizapiUtil.maxLength(requestBody, 'recontent.ft.message', 1000, requestBody.refkey);
        if (response)
            return response;
        var buttons = BizapiUtil.divideKey(requestBody, 'recontent.ft.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'ft.button format is an array.', refkey: requestBody.refkey };
            }
            for (var _i = 0, _a = Array.from(buttons); _i < _a.length; _i++) {
                var button = _a[_i];
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'The ft.button.name may not be greater than 28 characters.', refkey: requestBody.refkey };
                }
            }
        }
        this.requiredFieldByType.push('recontent.ft.message');
        this.requiredFieldByType.push('recontent.ft.senderkey');
        this.maxFiledByType.set('recontent.ft.senderkey', 40);
        return _super.prototype.validation.call(this, requestBody);
    };
    return FTResend;
}(Resend_1.Resend));
exports.FTResend = FTResend;
