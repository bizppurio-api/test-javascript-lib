import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
import * as BizapiUtil from "../../common/BizapiUtil";
import { BizapiDefine } from "../../common/BizapiDefine";

export class ATSend extends Send {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer, "at");
        this.content.at = this.contentDetail;
    }

    message(message:string) {
        this.contentDetail.message = message;
        return this;
    }

    senderkey(senderkey:string) {
        this.contentDetail.senderkey = senderkey;
        return this;
    }

    templatecode(templatecode:string) {
        this.contentDetail.templatecode = templatecode;
        return this;
    }

    button(...button:object[]) {
        this.contentDetail.button = button;
        return this;
    }

    title(title:string) {
        this.contentDetail.title = title;
        return this;
    }

    quickreply(quickreply:string) {
        this.contentDetail.quickreply = quickreply;
        return this;
    }

    resendFirst(first:Resend) {
        return super.resendFirst(first);
    }

    resendSecond(second:Resend) {
        return super.resendSecond(second);
    }

    protected validation() {
        let response = BizapiUtil.maxLength(this.requestBody, 'content.at.message', 1000, this.requestBody.refkey);
        if (response) return response;

        let buttons = BizapiUtil.divideKey(this.requestBody, 'content.at.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return {code:BizapiDefine.INVALID_MESSAGE.code,description:'at.button format is an array.',refkey:this.requestBody.refkey}
            }

            for (let button of Array.from(buttons)) {
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return {code:BizapiDefine.INVALID_MESSAGE.code,description:'The at.button.name may not be greater than 28 characters.',refkey:this.requestBody.refkey}
                }
            }
        }

        this.requiredFieldByType.push('content.at.message');
        this.requiredFieldByType.push('content.at.senderkey');
        this.requiredFieldByType.push('content.at.templatecode');
        this.maxFiledByType.set('content.at.senderkey', 40);
        this.maxFiledByType.set('content.at.templatecode', 32);
        
        response = super.validation();
        if (response) return response;

        return this.resendValidation(this.requestBody);
    }

}