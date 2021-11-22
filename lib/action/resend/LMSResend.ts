import { Resend } from "./Resend";

export class LMSResend extends Resend {
    constructor() {
        super("lms")
    }

    message(message:string) {
        this.recontentDetail.message = message;
        return this;
    }

    subject(subject:string) {
        this.recontentDetail.subject = subject;
        return this;
    }

    validation(requestBody:any) {
        this.requiredFieldByType.push('recontent.lms.message');
        this.maxFiledByType.set('recontent.lms.message', 2000);
        this.maxFiledByType.set('recontent.lms.subject', 64);
        return super.validation(requestBody);
    }
}