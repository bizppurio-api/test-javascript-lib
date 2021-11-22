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
exports.MMSResend = void 0;
var Resend_1 = require("./Resend");
var BizapiDefine_1 = require("../../common/BizapiDefine");
var MMSResend = /** @class */ (function (_super) {
    __extends(MMSResend, _super);
    function MMSResend() {
        return _super.call(this, "mms") || this;
    }
    MMSResend.prototype.message = function (message) {
        this.recontentDetail.message = message;
        return this;
    };
    MMSResend.prototype.subject = function (subject) {
        this.recontentDetail.subject = subject;
        return this;
    };
    MMSResend.prototype.filekey = function () {
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
        this.recontentDetail.file = file;
        return this;
    };
    MMSResend.prototype.getFileType = function (filekey) {
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
    MMSResend.prototype.validation = function (requestBody) {
        this.requiredFieldByType.push('recontent.mms.message');
        this.maxFiledByType.set('recontent.mms.message', 2000);
        this.maxFiledByType.set('recontent.mms.subject', 64);
        var files = this.recontentDetail.file;
        if (!files || !Array.isArray(files) || files.length === 0) {
            return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'file[] is required', refkey: requestBody.refkey };
        }
        if (files.length > 3) {
            return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: "file[] maximum size is 3 (size:" + files.length + ")", refkey: requestBody.refkey };
        }
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            if (!file.type || (typeof file.type === 'string' && file.type === '')) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'file type is not empty', refkey: requestBody.refkey };
            }
            if (!file.key || (typeof file.key === 'string' && file.key === '')) {
                return { code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code, description: 'file key is not empty', refkey: requestBody.refkey };
            }
        }
        return _super.prototype.validation.call(this, requestBody);
    };
    return MMSResend;
}(Resend_1.Resend));
exports.MMSResend = MMSResend;
