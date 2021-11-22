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
exports.MMSSend = void 0;
var BizapiDefine_1 = require("../../common/BizapiDefine");
var Send_1 = require("./Send");
var MMSSend = /** @class */ (function (_super) {
    __extends(MMSSend, _super);
    function MMSSend(tokenIssuer) {
        var _this = _super.call(this, tokenIssuer, "mms") || this;
        _this.content.mms = _this.contentDetail;
        return _this;
    }
    MMSSend.prototype.message = function (message) {
        this.contentDetail.message = message;
        return this;
    };
    MMSSend.prototype.subject = function (subject) {
        this.contentDetail.subject = subject;
        return this;
    };
    MMSSend.prototype.filekey = function () {
        var _this = this;
        var filekeys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filekeys[_i] = arguments[_i];
        }
        var file = new Array();
        filekeys.forEach(function (filekey) {
            file.push({
                type: _this.getFileType(filekey),
                key: filekey
            });
        });
        this.contentDetail.file = file;
        return this;
    };
    MMSSend.prototype.getFileType = function (filekey) {
        if (filekey) {
            var extension = filekey.substring(filekey.lastIndexOf(".") + 1).toUpperCase();
            switch (extension) {
                case 'JPG':
                case 'JPEG':
                    return "IMG";
            }
        }
        return null;
    };
    MMSSend.prototype.validation = function () {
        this.requiredFieldByType.push('content.mms.message');
        this.maxFiledByType.set('content.mms.message', 2000);
        this.maxFiledByType.set('content.mms.subject', 64);
        var files = this.contentDetail.file;
        console.log(files);
        if (!files || !Array.isArray(files) || files.length === 0) {
            return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'file[] is required', refkey: this.requestBody.refkey };
        }
        if (files.length > 3) {
            return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: "file[] maximum size is 3 (size:" + files.length + ")", refkey: this.requestBody.refkey };
        }
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            console.log(!file.type);
            if (!file.type || (typeof file.type === 'string' && file.type === '')) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'file type is not empty', refkey: this.requestBody.refkey };
            }
            if (!file.key || (typeof file.key === 'string' && file.key === '')) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'file key is not empty', refkey: this.requestBody.refkey };
            }
        }
        return _super.prototype.validation.call(this);
    };
    return MMSSend;
}(Send_1.Send));
exports.MMSSend = MMSSend;
