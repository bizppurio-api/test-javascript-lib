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
exports.MMSSendFile = void 0;
var BizAction_1 = require("../BizAction");
var fs = require("fs");
var MMSSendFile = /** @class */ (function (_super) {
    __extends(MMSSendFile, _super);
    function MMSSendFile(tokenIssuer) {
        return _super.call(this, tokenIssuer) || this;
    }
    MMSSendFile.prototype.file = function (file) {
        this._file = file;
        return this;
    };
    MMSSendFile.prototype.execute = function () {
        var _a;
        var boundary = this.getUUID();
        var requestProperty = { 'content-type': "multipart/form-data;charset=utf-8;boundary=" + boundary };
        this.requestBody = new Array();
        this.requestBody.push("--" + boundary + "\r\n");
        this.requestBody.push("Content-Disposition: form-data; name=\"account\"\r\n");
        this.requestBody.push("Content-Type: text/plain; charset=UTF-8\r\n");
        this.requestBody.push("Content-Transfer-Encoding: 8bit\r\n");
        this.requestBody.push("\r\n");
        this.requestBody.push(((_a = this.tokenIssuer) === null || _a === void 0 ? void 0 : _a.getAccount()) + "\r\n");
        this.requestBody.push("--" + boundary + "\r\n");
        this.requestBody.push("Content-Disposition: form-data; name=\"file\"; filename=\"" + this._file + "\"\r\n");
        this.requestBody.push("Content-Type: image/jpeg\r\n");
        this.requestBody.push("Content-Transfer-Encoding: binary\r\n");
        this.requestBody.push("\r\n");
        var buffer = Buffer.concat([Buffer.from(this.requestBody.join('')), fs.readFileSync(String(this._file)), Buffer.from("\r\n--" + boundary + "--\r\n")]);
        return this.bizExecute("/v1/file", requestProperty, buffer);
    };
    MMSSendFile.prototype.createResponse = function (response) {
        try {
            if (response.responseData) {
                var responseData = JSON.parse(response.responseData);
                response.code = responseData.code;
                response.description = responseData.description;
                response.filekey = responseData.filekey;
            }
        }
        catch (err) { }
        return response;
    };
    MMSSendFile.prototype.getUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
            return v.toString(16);
        });
    };
    MMSSendFile.prototype.validation = function () {
        return null;
    };
    return MMSSendFile;
}(BizAction_1.BizAction));
exports.MMSSendFile = MMSSendFile;
