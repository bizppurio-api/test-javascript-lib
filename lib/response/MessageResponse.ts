import { BizapiResponse } from "./BizapiResponse";

export class MessageResponse extends BizapiResponse {
    refkey?:string;
    messagekey?:string;
}