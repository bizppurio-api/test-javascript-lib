import { Resend } from "./Resend";
import * as BizapiUtil from "../../common/BizapiUtil";
import { BizapiDefine } from "../../common/BizapiDefine";

export class FTResend extends Resend {
    constructor() {
        super("ft")
    }

    message(message:string) {
        this.recontentDetail.message = message;
        return this;
    }    

    senderkey(senderkey:string) {
        this.recontentDetail.senderkey = senderkey;
        return this;
    }

    userkey(userkey:string) {
        this.recontentDetail.userkey = userkey;
        return this;
    }

    adflag(adflag:string) {
        this.recontentDetail.adflag = adflag;
        return this;
    }

    button(...buttons:Array<object>) {
        this.recontentDetail.button = buttons;
        return this;
    }

    image(image:object) {
        this.recontentDetail.image = image;
        return this;
    }

    wide(wide:string) {
        this.recontentDetail.wide = wide;
        return this;
    }

    validation(requestBody:any) {
        let response = BizapiUtil.maxLength(requestBody, 'recontent.ft.message', 1000, requestBody.refkey);
        if (response) return response;

        let buttons = BizapiUtil.divideKey(requestBody, 'recontent.ft.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return {code:BizapiDefine.INVALID_MESSAGE.code,description:'ft.button format is an array.',refkey:requestBody.refkey}
            }

            for (let button of Array.from(buttons)) {
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return {code:BizapiDefine.INVALID_MESSAGE.code,description:'The ft.button.name may not be greater than 28 characters.',refkey:requestBody.refkey}
                }
            }
        }

        this.requiredFieldByType.push('recontent.ft.message');
        this.requiredFieldByType.push('recontent.ft.senderkey');
        this.maxFiledByType.set('recontent.ft.senderkey', 40);
        
        return super.validation(requestBody);
    }
}