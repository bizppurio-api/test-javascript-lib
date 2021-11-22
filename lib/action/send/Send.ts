import { BizapiDefine } from "../../common/BizapiDefine";
import * as BizapiUtil from "../../common/BizapiUtil";
import { MessageResponse } from "../../response/MessageResponse";
import { BizAction } from "../BizAction";
import { Resend } from "../resend/Resend";
import { TokenIssuer } from "../TokenIssuer";

export class Send extends BizAction<MessageResponse> {
    requestBody:any = {};
    protected content:any = {};
    protected contentDetail:any = {};
    protected recontent?: any;
    protected resend?: any;
    protected first?:Resend;
    protected second?:Resend;
    
    protected commonRequiredField = ['to','from','refkey'];
    protected commonMaxField = new Map<string, number>([['to',16], ['from',16], ['country',3], ['refkey',32], ['userinfo',50]]);
    protected requiredFieldByType = new Array<string>();
    protected maxFiledByType = new Map<string, number>();

    constructor(tokenIssuer:TokenIssuer, type:string) {
        super(tokenIssuer);
        this.requestBody.account = tokenIssuer.getAccount();
        this.requestBody.type = type;
        this.requestBody.content = this.content;
    }
    from(from:string) {
        this.requestBody.from = from;
        return this;
    }

    to(to:string) {
        this.requestBody.to = to;
        return this;
    }

    refkey(refkey:string) {
        this.requestBody.refkey = refkey;
        return this;
    }

    country(country:string) {
        this.requestBody.country = country;
        return this;
    }

    userinfo(userinfo:string) {
        this.requestBody.userinfo = userinfo;
        return this;
    }

    setRequestBody(requestBody:string) {
        this.requestBody = requestBody;
        return this;
    }

    private _resend() {
        if (!this.recontent || !this.resend) {
            this.recontent = {};
            this.resend = {}
            this.requestBody.resend = this.resend;
            this.requestBody.recontent = this.recontent;
        }
    }

    protected resendFirst(first:Resend) {
        this._resend();
        this.resend.first = first.type;
        this.recontent[first.type] = first.recontentDetail;
        this.first = first;
        return this;
    }

    protected resendSecond(second:Resend) {
        this._resend();
        this.resend.second = second.type;
        this.recontent[second.type] = second.recontentDetail;
        this.second = second;
        return this;
    }

    protected createResponse(response: any): MessageResponse {
        try {            
            if (response.responseData) {
                const responseData = JSON.parse(response.responseData);
                response.code = responseData.code;
                response.description = responseData.description;
                response.messagekey = responseData.messagekey;
                response.refkey = responseData.refkey;
            }
        } catch (error) {}

        return response;
    }

    protected validation():any {
        if (!this.tokenIssuer?.token) {
            return BizapiDefine.INVALID_TOKEN;
        }
        let o = BizapiUtil.validation(this.requestBody, this.commonRequiredField, this.commonMaxField);
        if (o) return o;

        return BizapiUtil.validation(this.requestBody, this.requiredFieldByType, this.maxFiledByType);
    }

    protected resendValidation(requestBody:any) {
        let response;
        if (this.first) {
            response = this.first.validation(requestBody);
            if (response) return response;
        }

        if (this.second) {
            response = this.second.validation(requestBody);
            if (response) return response;
        }

        return response;
    }
}
