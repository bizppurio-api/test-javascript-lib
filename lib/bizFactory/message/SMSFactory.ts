import { SMSResend } from "../../action/resend/SMSResend";
import { SMSSend } from "../../action/send/SMSSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";

export class SMSFactory extends MessageFactory {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }

    sendAction(refkey:string, to:string, from:string, message:string):SMSSend {
        return new SMSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message);
    }

    createResend(message:string):SMSResend {
        return new SMSResend().message(message);
    }
}