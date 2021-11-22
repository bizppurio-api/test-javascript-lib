import { Resend } from "./Resend";
import * as BizapiUtil from "../../common/BizapiUtil";
import { BizapiDefine } from "../../common/BizapiDefine";

export class ATResend extends Resend {
    constructor() {
        super("at")
    }

    message(message:string) {
        this.recontentDetail.message = message;
        return this;
    }

    senderkey(senderkey:string) {
        this.recontentDetail.senderkey = senderkey;
        return this;
    }

    templatecode(templatecode:string) {
        this.recontentDetail.templatecode = templatecode;
        return this;
    }

    button(...button:object[]) {
        this.recontentDetail.button = button;
        return this;
    }

    title(title:string) {
        this.recontentDetail.title = title;
        return this;
    }

    quickreply(quickreply:string) {
        this.recontentDetail.quickreply = quickreply;
        return this;
    }

    validation(requestBody:any) {
        let response = BizapiUtil.maxLength(requestBody, 'recontent.at.message', 1000, requestBody.refkey);
        if (response) return response;

        let buttons = BizapiUtil.divideKey(requestBody, 'recontent.at.button');
        if (buttons) {
            if (!Array.isArray(buttons)) {
                return {code:BizapiDefine.INVALID_MESSAGE.code,description:'at.button format is an array.',refkey:requestBody.refkey}
            }

            for (let button of Array.from(buttons)) {
                if (button.name && BizapiUtil.getByteLength(button.name) > 28) {
                    return {code:BizapiDefine.INVALID_MESSAGE.code,description:'The at.button.name may not be greater than 28 characters.',refkey:requestBody.refkey}
                }
            }
        }

        this.requiredFieldByType.push('recontent.at.message');
        this.requiredFieldByType.push('recontent.at.senderkey');
        this.requiredFieldByType.push('recontent.at.templatecode');
        this.maxFiledByType.set('recontent.at.senderkey', 40);
        this.maxFiledByType.set('recontent.at.templatecode', 32);

        return super.validation(requestBody);
    }
}