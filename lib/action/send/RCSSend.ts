import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";

export class RCSSend extends Send {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer, "rcs");
        this.content.rcs = this.contentDetail;
    }

    message(message:object) {
        this.contentDetail.message = message;
        return this;
    }

    messagebaseid(messagebaseid:string) {
        this.contentDetail.messagebaseid = messagebaseid;
        return this;
    }
    
    chatbotid(chatbotid:string) {
        this.contentDetail.chatbotid = chatbotid;
        return this;
    }
    
    agencyid(agencyid:string) {
        this.contentDetail.agencyid = agencyid;
        return this;
    }
    
    header(header:string) {
        this.contentDetail.header = header;
        return this;
    }
    
    footer(footer:string) {
        this.contentDetail.footer = footer;
        return this;
    }

    copyallowed(copyallowed:string) {
        this.contentDetail.copyallowed = copyallowed;
        return this;
    }

    button(...button:object[]) {
        this.contentDetail.button = button
        return this;
    }

    resendFirst(first:Resend) {
        return super.resendFirst(first);
    }

    resendSecond(second:Resend) {
        return super.resendSecond(second);
    }

    protected validation() {
        this.requiredFieldByType.push('content.rcs.messagebaseid');
        this.requiredFieldByType.push('content.rcs.message');
        this.requiredFieldByType.push('content.rcs.chatbotid');
        this.requiredFieldByType.push('content.rcs.header');
        this.maxFiledByType.set('content.rcs.messagebaseid', 40);
        this.maxFiledByType.set('content.rcs.chatbotid', 40);
        this.maxFiledByType.set('content.rcs.header', 1);

        let header = this.contentDetail.header;
        if (header && header === '1') {
            this.requiredFieldByType.push('content.rcs.footer');
            this.maxFiledByType.set('content.rcs.footer', 64);
        }
        
        let response = super.validation();
        if (response) return response;

        return this.resendValidation(this.requestBody);
    }
}