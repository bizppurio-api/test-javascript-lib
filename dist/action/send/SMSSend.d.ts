import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
export declare class SMSSend extends Send {
    constructor(tokenIssuer: TokenIssuer);
    message(message: string): this;
    protected validation(): any;
}
