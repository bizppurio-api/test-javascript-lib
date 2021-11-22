"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIZAPI = void 0;
var TokenIssuer_js_1 = require("./action/TokenIssuer.js");
var SMSFactory_js_1 = require("./bizFactory/message/SMSFactory.js");
var LMSFactory_js_1 = require("./bizFactory/message/LMSFactory.js");
var MMSFactory_js_1 = require("./bizFactory/message/MMSFactory.js");
var ATFactory_js_1 = require("./bizFactory/message/ATFactory.js");
var FTFactory_js_1 = require("./bizFactory/message/FTFactory.js");
var RCSFactory_js_1 = require("./bizFactory/message/RCSFactory.js");
var KakaoAttachmentFacotry_js_1 = require("./bizFactory/attachment/kakao/KakaoAttachmentFacotry.js");
var RcsButtonFactory_js_1 = require("./bizFactory/attachment/rcs/RcsButtonFactory.js");
var BizapiDefine_js_1 = require("./common/BizapiDefine.js");
var BIZAPI = /** @class */ (function () {
    function BIZAPI(account, pw, options) {
        this.tokenIssuer = new TokenIssuer_js_1.TokenIssuer(account, pw);
        if (options) {
            this.tokenIssuer.setOptions(options);
        }
        this.sms = new SMSFactory_js_1.SMSFactory(this.tokenIssuer);
        this.lms = new LMSFactory_js_1.LMSFactory(this.tokenIssuer);
        this.mms = new MMSFactory_js_1.MMSFactory(this.tokenIssuer);
        this.at = new ATFactory_js_1.ATFactory(this.tokenIssuer);
        this.ft = new FTFactory_js_1.FTFactory(this.tokenIssuer);
        this.rcs = new RCSFactory_js_1.RCSFactory(this.tokenIssuer);
        this.kakaoAttachment = new KakaoAttachmentFacotry_js_1.KakaoAttachmentFacotry();
        this.rcsButton = new RcsButtonFactory_js_1.RcsButtonFactory();
        this.bizDomain = {
            production: BizapiDefine_js_1.BizapiDefine.BIZAPI_PRODUCTION_DOMAIN,
            staging: BizapiDefine_js_1.BizapiDefine.BIZAPI_STAGING_DOMAIN
        };
    }
    return BIZAPI;
}());
exports.BIZAPI = BIZAPI;
