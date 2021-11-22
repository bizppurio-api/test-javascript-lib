import { RCSResend } from "../../action/resend/RCSResend";
import { RCSSend } from "../../action/send/RCSSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";
export declare class RCSFactory extends MessageFactory {
    constructor(tokenIssuer: TokenIssuer);
    sendAction(refkey: string, to: string, from: string, message: object, messagebaseid: string, chatbotid: string, header: string): RCSSend;
    createResend(message: object, messagebaseid: string, chatbotid: string, header: string): RCSResend;
}
