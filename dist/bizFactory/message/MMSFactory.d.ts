import { MMSResend } from "../../action/resend/MMSResend";
import { MMSSend } from "../../action/send/MMSSend";
import { MMSSendFile } from "../../action/send/MMSSendFile";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";
export declare class MMSFactory extends MessageFactory {
    constructor(tokenIssuer: TokenIssuer);
    sendAction(refkey: string, to: string, from: string, message: string, ...filekeys: string[]): MMSSend;
    sendFileAction(file: string): MMSSendFile;
    createResend(message: string, subject: string, ...filekeys: string[]): MMSResend;
}
