import { TokenIssuer } from "./action/TokenIssuer.js";
import { SMSFactory } from "./bizFactory/message/SMSFactory.js";
import { LMSFactory } from "./bizFactory/message/LMSFactory.js";
import { MMSFactory } from "./bizFactory/message/MMSFactory.js";
import { ATFactory } from "./bizFactory/message/ATFactory.js";
import { FTFactory } from "./bizFactory/message/FTFactory.js";
import { RCSFactory } from "./bizFactory/message/RCSFactory.js";
import { KakaoAttachmentFacotry } from "./bizFactory/attachment/kakao/KakaoAttachmentFacotry.js";
import { RcsButtonFactory } from "./bizFactory/attachment/rcs/RcsButtonFactory.js";
import { BizapiDefine } from "./common/BizapiDefine.js";
import { BizapiOptions } from "./common/BizapiOptions.js";

export class BIZAPI {
    public tokenIssuer:TokenIssuer;
    public sms:SMSFactory;
    public lms:LMSFactory;
    public mms:MMSFactory;
    public at:ATFactory;
    public ft:FTFactory;
    public rcs:RCSFactory
    public kakaoAttachment:KakaoAttachmentFacotry;
    public rcsButton:RcsButtonFactory;
    public bizDomain;

    constructor(account:string, pw:string, options?:BizapiOptions) {
        this.tokenIssuer = new TokenIssuer(account, pw);
        if (options) {this.tokenIssuer.setOptions(options);}
        this.sms = new SMSFactory(this.tokenIssuer);
        this.lms = new LMSFactory(this.tokenIssuer);
        this.mms = new MMSFactory(this.tokenIssuer);
        this.at = new ATFactory(this.tokenIssuer);
        this.ft = new FTFactory(this.tokenIssuer);
        this.rcs = new RCSFactory(this.tokenIssuer);
        this.kakaoAttachment = new KakaoAttachmentFacotry();
        this.rcsButton = new RcsButtonFactory();
        this.bizDomain = {
            production: BizapiDefine.BIZAPI_PRODUCTION_DOMAIN,
            staging: BizapiDefine.BIZAPI_STAGING_DOMAIN
        }
    }
}