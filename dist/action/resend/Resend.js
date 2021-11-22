"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resend = void 0;
var BizapiUtil = require("../../common/BizapiUtil");
var Resend = /** @class */ (function () {
    function Resend(type) {
        this.recontentDetail = {};
        this.requiredFieldByType = new Array();
        this.maxFiledByType = new Map();
        this.type = type;
    }
    Resend.prototype.validation = function (requestBody) {
        return BizapiUtil.validation(requestBody, this.requiredFieldByType, this.maxFiledByType);
    };
    return Resend;
}());
exports.Resend = Resend;
