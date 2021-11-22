import { LMSResend } from "../../action/resend/LMSResend";
import { LMSSend } from "../../action/send/LMSSend";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";
export declare class LMSFactory extends MessageFactory {
    constructor(tokenIssuer: TokenIssuer);
    sendAction(refkey: string, to: string, from: string, message: string): LMSSend;
    createResend(message: string, subject: string): LMSResend;
}
