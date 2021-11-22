import { SMSResend } from "../../action/resend/SMSResend";
import { SMSSend } from "../../action/send/SMSSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";
export declare class SMSFactory extends MessageFactory {
    constructor(tokenIssuer: TokenIssuer);
    sendAction(refkey: string, to: string, from: string, message: string): SMSSend;
    createResend(message: string): SMSResend;
}
