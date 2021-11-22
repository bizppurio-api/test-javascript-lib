import { FTResend } from "../../action/resend/FTResend";
import { FTSend } from "../../action/send/FTSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";

export class FTFactory extends MessageFactory {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }

    sendAction(refkey:string, to:string, from:string, message:string, senderkey:string):FTSend {
        return new FTSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)
            .senderkey(senderkey);
    }

    createResend(message:string, senderkey:string) {
        return new FTResend().message(message).senderkey(senderkey);
    }
}