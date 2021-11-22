import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
export declare class LMSSend extends Send {
    constructor(tokenIssuer: TokenIssuer);
    message(message: string): this;
    subject(subject: string): this;
    protected validation(): any;
}
