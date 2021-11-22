import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";
export declare class MMSSend extends Send {
    constructor(tokenIssuer: TokenIssuer);
    message(message: string): this;
    subject(subject: string): this;
    filekey(...filekeys: Array<string>): this;
    private getFileType;
    protected validation(): any;
}
