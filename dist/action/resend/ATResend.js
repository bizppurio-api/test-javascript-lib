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
exports.ATResend = void 0;
var Resend_1 = require("./Resend");
var BizapiUtil = require("../../common/BizapiUtil");
var BizapiDefine_1 = require("../../common/BizapiDefine");
var ATResend = /** @class */ (function (_super) {
    __extends(ATResend, _super);
    function ATResend() {
        return _super.call(this, "at") || this;
    }
    ATResend.prototype.message = function (message) {
        this.recontentDetail.message = message;
        return this;
    };
    ATResend.prototype.senderkey = function (senderkey) {
        this.recontentDetail.senderkey = senderkey;
        return this;
    };
    ATResend.prototype.templatecode = function (templatecode) {
        this.recontentDetail.templatecode = templatecode;
        return this;
    };
    ATResend.prototype.button = function () {
        var button = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            button[_i] = arguments[_i];
        }
        this.recontentDetail.button = button;
        return this;
    };
    ATResend.prototype.title = function (title) {
        this.recontentDetail.title = title;
        return this;
    };
    ATResend.prototype.quickreply = function (quickreply) {
        this.recontentDetail.quickreply = quickreply;
        return this;
    };
    ATResend.prototype.validation = function (requestBody) {
        var response = BizapiUtil.maxLength(requestBody, 'recontent.at.message', 1000, requestBody.refkey);
        if (response)
            return response;
        var buttons = BizapiUtil.divideKey(requestBody, 'recontent.at.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'at.button format is an array.', refkey: requestBody.refkey };
            }
            for (var _i = 0, _a = Array.from(buttons); _i < _a.length; _i++) {
                var button = _a[_i];
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'The at.button.name may not be greater than 28 characters.', refkey: requestBody.refkey };
                }
            }
        }
        this.requiredFieldByType.push('recontent.at.message');
        this.requiredFieldByType.push('recontent.at.senderkey');
        this.requiredFieldByType.push('recontent.at.templatecode');
        this.maxFiledByType.set('recontent.at.senderkey', 40);
        this.maxFiledByType.set('recontent.at.templatecode', 32);
        return _super.prototype.validation.call(this, requestBody);
    };
    return ATResend;
}(Resend_1.Resend));
exports.ATResend = ATResend;
