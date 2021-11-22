import { RCSResend } from "../../action/resend/RCSResend";
import { RCSSend } from "../../action/send/RCSSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";

export class RCSFactory extends MessageFactory {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }

    sendAction(refkey:string, to:string, from:string, message:object, messagebaseid:string, chatbotid:string, header:string):RCSSend {
        return new RCSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message)
            .messagebaseid(messagebaseid)
            .chatbotid(chatbotid)
            .header(header);
    }
    
    createResend(message:object, messagebaseid:string, chatbotid:string, header:string) {
        return new RCSResend()
            .message(message)
            .messagebaseid(messagebaseid)
            .chatbotid(chatbotid)
            .header(header);
    }
}