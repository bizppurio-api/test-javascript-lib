import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
import * as BizapiUtil from "../../common/BizapiUtil";
import { BizapiDefine } from "../../common/BizapiDefine";

export class FTSend extends Send {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer, "ft");
        this.content.ft = this.contentDetail;
    }

    message(message:string) {
        this.contentDetail.message = message;
        return this;
    }    

    senderkey(senderkey:string) {
        this.contentDetail.senderkey = senderkey;
        return this;
    }

    userkey(userkey:string) {
        this.contentDetail.userkey = userkey;
        return this;
    }

    adflag(adflag:string) {
        this.contentDetail.adflag = adflag;
        return this;
    }

    button(...buttons:Array<object>) {
        this.contentDetail.button = buttons;
        return this;
    }

    image(image:object) {
        this.contentDetail.image = image;
        return this;
    }

    wide(wide:string) {
        this.contentDetail.wide = wide;
        return this;
    }

    resendFirst(first:Resend) {
        return super.resendFirst(first);
    }

    resendSecond(second:Resend) {
        return super.resendSecond(second);
    }

    protected validation() {
        let response = BizapiUtil.maxLength(this.requestBody, 'content.ft.message', 1000, this.requestBody.refkey);
        if (response) return response;

        let buttons = BizapiUtil.divideKey(this.requestBody, 'content.ft.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return {code:BizapiDefine.INVALID_MESSAGE.code,description:'ft.button format is an array.',refkey:this.requestBody.refkey}
            }

            for (let button of Array.from(buttons)) {
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return {code:BizapiDefine.INVALID_MESSAGE.code,description:'The ft.button.name may not be greater than 28 characters.',refkey:this.requestBody.refkey}
                }
            }
        }

        this.requiredFieldByType.push('content.ft.message');
        this.requiredFieldByType.push('content.ft.senderkey');
        this.maxFiledByType.set('content.ft.senderkey', 40);
        
        response = super.validation();
        if (response) return response;

        return this.resendValidation(this.requestBody);
    }
}