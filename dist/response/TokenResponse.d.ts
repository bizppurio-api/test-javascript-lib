import { BizapiResponse } from "./BizapiResponse";
export declare class TokenResponse extends BizapiResponse {
    accesstoken?: string;
    type?: string;
    expired?: string;
}
