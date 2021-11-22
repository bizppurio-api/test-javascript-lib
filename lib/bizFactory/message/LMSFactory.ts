import { LMSResend } from "../../action/resend/LMSResend";
import { LMSSend } from "../../action/send/LMSSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";

export class LMSFactory extends MessageFactory {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }
    
    sendAction(refkey:string, to:string, from:string, message:string):LMSSend {
        return new LMSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message);
    }

    createResend(message:string, subject:string) {
        return new LMSResend().message(message).subject(subject);
    }
}