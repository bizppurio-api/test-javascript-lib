import { MMSResend } from "../../action/resend/MMSResend";
import { MMSSend } from "../../action/send/MMSSend";
import { MMSSendFile } from "../../action/send/MMSSendFile";
import { TokenIssuer } from "../../action/TokenIssuer";
import { MessageFactory } from "./MessageFacotry";

export class MMSFactory extends MessageFactory {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }
    
    sendAction(refkey:string, to:string, from:string, message:string, ...filekeys:string[]):MMSSend {
        return new MMSSend(this.tokenIssuer)
            .refkey(refkey)
            .to(to)
            .from(from)
            .message(message).filekey(...filekeys);
    }

    sendFileAction(file:string):MMSSendFile {
        return new MMSSendFile(this.tokenIssuer).file(file);
    }

    createResend(message:string, subject:string, ...filekeys:string[]) {
        return new MMSResend().message(message).subject(subject).filekey(...filekeys);
    }
}