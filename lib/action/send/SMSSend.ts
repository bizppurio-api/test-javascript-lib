import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";

export class SMSSend extends Send {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer, "sms");
        this.content.sms = this.contentDetail;
    }

    message(message:string) {
        this.contentDetail.message = message;
        return this;
    }
    
    protected validation() {
        this.requiredFieldByType.push('content.sms.message');
        this.maxFiledByType.set('content.sms.message', 90);
        return super.validation();
    }
}