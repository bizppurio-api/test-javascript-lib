import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
export declare class ATSend extends Send {
    constructor(tokenIssuer: TokenIssuer);
    message(message: string): this;
    senderkey(senderkey: string): this;
    templatecode(templatecode: string): this;
    button(...button: object[]): this;
    title(title: string): this;
    quickreply(quickreply: string): this;
    resendFirst(first: Resend): this;
    resendSecond(second: Resend): this;
    protected validation(): {
        code: string;
        description: string;
        refkey: any;
    } | null | undefined;
}
