import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";

export class LMSSend extends Send {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer, "lms");
        this.content.lms = this.contentDetail;
    }

    message(message:string) {
        this.contentDetail.message = message;
        return this;
    }

    subject(subject:string) {
        this.contentDetail.subject = subject;
        return this;
    }

    protected validation() {
        this.requiredFieldByType.push('content.lms.message');
        this.maxFiledByType.set('content.lms.message', 2000);
        this.maxFiledByType.set('content.lms.subject', 64);
        return super.validation();
    }
}