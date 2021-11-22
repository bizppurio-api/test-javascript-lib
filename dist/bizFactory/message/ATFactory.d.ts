import { ATResend } from "../../action/resend/ATResend";
import { ATSend } from "../../action/send/ATSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";
export declare class ATFactory extends MessageFactory {
    constructor(tokenIssuer: TokenIssuer);
    sendAction(refkey: string, to: string, from: string, message: string, senderkey: string, templatecode: string): ATSend;
    createResend(message: string, senderkey: string, templatecode: string): ATResend;
}
