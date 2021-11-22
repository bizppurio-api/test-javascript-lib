import { BizAction } from "./BizAction.js";
import { TokenResponse } from "../response/TokenResponse";
import { BizapiOptions } from "../common/BizapiOptions.js";
export declare class TokenIssuer extends BizAction<TokenResponse> {
    private account;
    private pw;
    token?: string;
    expired?: string;
    option: {
        domain: string;
        rejectUnauthorized: boolean;
        timeout: number;
        port: number;
    };
    getAccount(): string;
    setOptions(options: BizapiOptions): void;
    constructor(account: string, pw: string);
    protected createResponse(response: any): TokenResponse;
    execute(): Promise<TokenResponse>;
    protected validation(): {
        code: string;
        description: string;
    } | null;
}
