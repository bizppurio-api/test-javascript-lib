import { MessageResponse } from "../../response/MessageResponse";
import { BizAction } from "../BizAction";
import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";
export declare class Send extends BizAction<MessageResponse> {
    requestBody: any;
    protected content: any;
    protected contentDetail: any;
    protected recontent?: any;
    protected resend?: any;
    protected first?: Resend;
    protected second?: Resend;
    protected commonRequiredField: string[];
    protected commonMaxField: Map<string, number>;
    protected requiredFieldByType: string[];
    protected maxFiledByType: Map<string, number>;
    constructor(tokenIssuer: TokenIssuer, type: string);
    from(from: string): this;
    to(to: string): this;
    refkey(refkey: string): this;
    country(country: string): this;
    userinfo(userinfo: string): this;
    setRequestBody(requestBody: string): this;
    private _resend;
    protected resendFirst(first: Resend): this;
    protected resendSecond(second: Resend): this;
    protected createResponse(response: any): MessageResponse;
    protected validation(): any;
    protected resendValidation(requestBody: any): {
        code: string;
        description: string;
        refkey: string;
    } | null | undefined;
}
