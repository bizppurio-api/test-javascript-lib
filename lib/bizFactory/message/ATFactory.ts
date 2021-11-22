import { ATResend } from "../../action/resend/ATResend";
import { ATSend } from "../../action/send/ATSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";

export class ATFactory extends MessageFactory {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }
    
    sendAction(refkey:string, to:string, from:string, message:string, senderkey:string, templatecode:string):ATSend {
        return new ATSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)
            .senderkey(senderkey)
            .templatecode(templatecode);
    }

    createResend(message:string, senderkey:string, templatecode:string) {
        return new ATResend().message(message).senderkey(senderkey).templatecode(templatecode);
    }
}