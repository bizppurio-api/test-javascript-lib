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
exports.TokenIssuer = void 0;
var BizAction_js_1 = require("./BizAction.js");
var BizapiDefine_1 = require("../common/BizapiDefine");
var TokenIssuer = /** @class */ (function (_super) {
    __extends(TokenIssuer, _super);
    function TokenIssuer(account, pw) {
        var _this = _super.call(this) || this;
        _this.option = {
            domain: BizapiDefine_1.BizapiDefine.BIZAPI_PRODUCTION_DOMAIN,
            rejectUnauthorized: true,
            timeout: 3000,
            port: 443
        };
        _this.tokenIssuer = _this;
        _this.account = account;
        _this.pw = pw;
        return _this;
    }
    TokenIssuer.prototype.getAccount = function () {
        return this.account;
    };
    TokenIssuer.prototype.setOptions = function (options) {
        if (options) {
            if (options.domain)
                this.option.domain = options.domain;
            if (options.maxSockets)
                _super.prototype.setMaxSokcets.call(this, options.maxSockets);
            if (options.port)
                this.option.port = options.port;
            this.option.rejectUnauthorized = !options.rejectUnauthorized ? false : true;
            if (options.timeout)
                this.option.timeout = options.timeout;
        }
    };
    TokenIssuer.prototype.createResponse = function (response) {
        try {
            if (response.responseData) {
                var responseData = JSON.parse(response.responseData);
                response.accesstoken = responseData.accesstoken;
                response.code = responseData.code;
                response.description = responseData.description;
                response.expired = responseData.expired;
                response.type = responseData.type;
            }
        }
        catch (err) { }
        return response;
    };
    TokenIssuer.prototype.execute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestProperty = {
                Authorization: "Basic " + Buffer.from(_this.account + ":" + _this.pw).toString('base64')
            };
            var tokenResponse = _this.bizExecute("/v1/token", requestProperty, null);
            tokenResponse.then(function (res) {
                _this.token = res.accesstoken;
                _this.expired = res.expired;
                resolve(tokenResponse);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    TokenIssuer.prototype.validation = function () {
        if (!this.account || this.account === '')
            return {
                code: BizapiDefine_1.BizapiDefine.INVALID_TOKEN.code,
                description: "account is requried."
            };
        if (!this.pw || this.pw === '')
            return {
                code: BizapiDefine_1.BizapiDefine.INVALID_TOKEN.code,
                description: "password is requried."
            };
        return null;
    };
    return TokenIssuer;
}(BizAction_js_1.BizAction));
exports.TokenIssuer = TokenIssuer;
