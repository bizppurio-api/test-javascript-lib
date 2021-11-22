import { TokenIssuer } from "./action/TokenIssuer.js";
import { SMSFactory } from "./bizFactory/message/SMSFactory.js";
import { LMSFactory } from "./bizFactory/message/LMSFactory.js";
import { MMSFactory } from "./bizFactory/message/MMSFactory.js";
import { ATFactory } from "./bizFactory/message/ATFactory.js";
import { FTFactory } from "./bizFactory/message/FTFactory.js";
import { RCSFactory } from "./bizFactory/message/RCSFactory.js";
import { KakaoAttachmentFacotry } from "./bizFactory/attachment/kakao/KakaoAttachmentFacotry.js";
import { RcsButtonFactory } from "./bizFactory/attachment/rcs/RcsButtonFactory.js";
import { BizapiOptions } from "./common/BizapiOptions.js";
export declare class BIZAPI {
    tokenIssuer: TokenIssuer;
    sms: SMSFactory;
    lms: LMSFactory;
    mms: MMSFactory;
    at: ATFactory;
    ft: FTFactory;
    rcs: RCSFactory;
    kakaoAttachment: KakaoAttachmentFacotry;
    rcsButton: RcsButtonFactory;
    bizDomain: {
        production: string;
        staging: string;
    };
    constructor(account: string, pw: string, options?: BizapiOptions);
}
