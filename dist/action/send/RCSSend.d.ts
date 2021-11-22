import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
export declare class RCSSend extends Send {
    constructor(tokenIssuer: TokenIssuer);
    message(message: object): this;
    messagebaseid(messagebaseid: string): this;
    chatbotid(chatbotid: string): this;
    agencyid(agencyid: string): this;
    header(header: string): this;
    footer(footer: string): this;
    copyallowed(copyallowed: string): this;
    button(...button: object[]): this;
    resendFirst(first: Resend): this;
    resendSecond(second: Resend): this;
    protected validation(): any;
}
