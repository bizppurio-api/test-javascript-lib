import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
export declare class FTSend extends Send {
    constructor(tokenIssuer: TokenIssuer);
    message(message: string): this;
    senderkey(senderkey: string): this;
    userkey(userkey: string): this;
    adflag(adflag: string): this;
    button(...buttons: Array<object>): this;
    image(image: object): this;
    wide(wide: string): this;
    resendFirst(first: Resend): this;
    resendSecond(second: Resend): this;
    protected validation(): {
        code: string;
        description: string;
        refkey: any;
    } | null | undefined;
}
