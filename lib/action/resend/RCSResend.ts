import { Resend } from "./Resend";

export class RCSResend extends Resend {
    constructor() {
        super("rcs")
    }

    message(message:object) {
        this.recontentDetail.message = message;
        return this;
    }

    messagebaseid(messagebaseid:string) {
        this.recontentDetail.messagebaseid = messagebaseid;
        return this;
    }
    
    chatbotid(chatbotid:string) {
        this.recontentDetail.chatbotid = chatbotid;
        return this;
    }
    
    agencyid(agencyid:string) {
        this.recontentDetail.agencyid = agencyid;
        return this;
    }
    
    header(header:string) {
        this.recontentDetail.header = header;
        return this;
    }
    
    footer(footer:string) {
        this.recontentDetail.footer = footer;
        return this;
    }

    copyallowed(copyallowed:string) {
        this.recontentDetail.copyallowed = copyallowed;
        return this;
    }

    button(...button:object[]) {
        this.recontentDetail.button = button
        return this;
    }

    validation(requestBody:any) {
        this.requiredFieldByType.push('recontent.rcs.messagebaseid');
        this.requiredFieldByType.push('recontent.rcs.message');
        this.requiredFieldByType.push('recontent.rcs.chatbotid');
        this.requiredFieldByType.push('recontent.rcs.header');
        this.maxFiledByType.set('recontent.rcs.messagebaseid', 40);
        this.maxFiledByType.set('recontent.rcs.chatbotid', 40);
        this.maxFiledByType.set('recontent.rcs.header', 1);

        let header = this.recontentDetail.header;
        if (header && header === '1') {
            this.requiredFieldByType.push('recontent.rcs.footer');
            this.maxFiledByType.set('recontent.rcs.footer', 64);
        }
        
        return super.validation(requestBody);
    }
}