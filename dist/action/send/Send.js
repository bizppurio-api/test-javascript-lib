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
exports.Send = void 0;
var BizapiDefine_1 = require("../../common/BizapiDefine");
var BizapiUtil = require("../../common/BizapiUtil");
var BizAction_1 = require("../BizAction");
var Send = /** @class */ (function (_super) {
    __extends(Send, _super);
    function Send(tokenIssuer, type) {
        var _this = _super.call(this, tokenIssuer) || this;
        _this.requestBody = {};
        _this.content = {};
        _this.contentDetail = {};
        _this.commonRequiredField = ['to', 'from', 'refkey'];
        _this.commonMaxField = new Map([['to', 16], ['from', 16], ['country', 3], ['refkey', 32], ['userinfo', 50]]);
        _this.requiredFieldByType = new Array();
        _this.maxFiledByType = new Map();
        _this.requestBody.account = tokenIssuer.getAccount();
        _this.requestBody.type = type;
        _this.requestBody.content = _this.content;
        return _this;
    }
    Send.prototype.from = function (from) {
        this.requestBody.from = from;
        return this;
    };
    Send.prototype.to = function (to) {
        this.requestBody.to = to;
        return this;
    };
    Send.prototype.refkey = function (refkey) {
        this.requestBody.refkey = refkey;
        return this;
    };
    Send.prototype.country = function (country) {
        this.requestBody.country = country;
        return this;
    };
    Send.prototype.userinfo = function (userinfo) {
        this.requestBody.userinfo = userinfo;
        return this;
    };
    Send.prototype.setRequestBody = function (requestBody) {
        this.requestBody = requestBody;
        return this;
    };
    Send.prototype._resend = function () {
        if (!this.recontent || !this.resend) {
            this.recontent = {};
            this.resend = {};
            this.requestBody.resend = this.resend;
            this.requestBody.recontent = this.recontent;
        }
    };
    Send.prototype.resendFirst = function (first) {
        this._resend();
        this.resend.first = first.type;
        this.recontent[first.type] = first.recontentDetail;
        this.first = first;
        return this;
    };
    Send.prototype.resendSecond = function (second) {
        this._resend();
        this.resend.second = second.type;
        this.recontent[second.type] = second.recontentDetail;
        this.second = second;
        return this;
    };
    Send.prototype.createResponse = function (response) {
        try {
            if (response.responseData) {
                var responseData = JSON.parse(response.responseData);
                response.code = responseData.code;
                response.description = responseData.description;
                response.messagekey = responseData.messagekey;
                response.refkey = responseData.refkey;
            }
        }
        catch (error) { }
        return response;
    };
    Send.prototype.validation = function () {
        var _a;
        if (!((_a = this.tokenIssuer) === null || _a === void 0 ? void 0 : _a.token)) {
            return BizapiDefine_1.BizapiDefine.INVALID_TOKEN;
        }
        var o = BizapiUtil.validation(this.requestBody, this.commonRequiredField, this.commonMaxField);
        if (o)
            return o;
        return BizapiUtil.validation(this.requestBody, this.requiredFieldByType, this.maxFiledByType);
    };
    Send.prototype.resendValidation = function (requestBody) {
        var response;
        if (this.first) {
            response = this.first.validation(requestBody);
            if (response)
                return response;
        }
        if (this.second) {
            response = this.second.validation(requestBody);
            if (response)
                return response;
        }
        return response;
    };
    return Send;
}(BizAction_1.BizAction));
exports.Send = Send;
