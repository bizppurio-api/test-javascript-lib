import { TokenIssuer } from "./TokenIssuer";
export declare abstract class BizAction<T> {
    tokenIssuer?: TokenIssuer;
    requestBody: any;
    constructor(tokenIssuer?: TokenIssuer);
    protected setMaxSokcets(maxsockets: number): void;
    protected abstract createResponse(response: any): T;
    protected abstract validation(): any;
    protected bizCreateResponse(res: any, responseData: any): T;
    execute(): Promise<T>;
    protected bizExecute(path: string, requestProperty: any, body: any): Promise<T>;
}
