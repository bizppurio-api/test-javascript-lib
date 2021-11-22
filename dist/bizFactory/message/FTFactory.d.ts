import { FTResend } from "../../action/resend/FTResend";
import { FTSend } from "../../action/send/FTSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";
export declare class FTFactory extends MessageFactory {
    constructor(tokenIssuer: TokenIssuer);
    sendAction(refkey: string, to: string, from: string, message: string, senderkey: string): FTSend;
    createResend(message: string, senderkey: string): FTResend;
}
