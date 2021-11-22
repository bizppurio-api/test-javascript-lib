import { Resend } from "./Resend";

export class SMSResend extends Resend {
    constructor() {
        super("sms")
    }

    message(message:string) {
        this.recontentDetail.message = message;
        return this;
    }
        
    validation(requestBody:any) {
        this.requiredFieldByType.push('recontent.sms.message');
        this.maxFiledByType.set('recontent.sms.message', 90);
        return super.validation(requestBody);
    }
}