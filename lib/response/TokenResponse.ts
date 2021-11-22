import { BizapiResponse } from "./BizapiResponse";

export class TokenResponse extends BizapiResponse {
    accesstoken?:string;
    type?:string;
    expired?:string;
}
