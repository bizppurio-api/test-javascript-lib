import { BizAction } from "./BizAction.js";
import { TokenResponse } from "../response/TokenResponse";
import { BizapiDefine } from "../common/BizapiDefine";
import { BizapiOptions } from "../common/BizapiOptions.js";

export class TokenIssuer extends BizAction<TokenResponse>{
    private account:string;
    private pw:string;
    token?:string;
    expired?:string;
    option = {
        domain: BizapiDefine.BIZAPI_PRODUCTION_DOMAIN,
        rejectUnauthorized:true,
        timeout:3000,
        port:443
    }    

    getAccount() {
        return this.account;
    }    
    
    setOptions(options:BizapiOptions) {
        if (options) {
            if (options.domain) this.option.domain = options.domain;
            if (options.maxSockets) super.setMaxSokcets(options.maxSockets);
            if (options.port) this.option.port = options.port;
            this.option.rejectUnauthorized = !options.rejectUnauthorized ? false : true;
            if (options.timeout) this.option.timeout = options.timeout;
        }
    }

    constructor(account:string, pw:string){
        super();
        this.tokenIssuer = this;
        this.account = account;
        this.pw = pw;
    }

    protected createResponse(response: any): TokenResponse {        
        try {
            if (response.responseData) {
                const responseData = JSON.parse(response.responseData);
                response.accesstoken = responseData.accesstoken;
                response.code = responseData.code;
                response.description = responseData.description;
                response.expired = responseData.expired;
                response.type = responseData.type;
            }
        }catch(err) {}

        return response;
    }

    execute():Promise<TokenResponse>{
        return new Promise((resolve, reject) => {
            const requestProperty = {
                Authorization: "Basic " + Buffer.from(`${this.account}:${this.pw}`).toString('base64')
            }
    
            const tokenResponse = this.bizExecute("/v1/token", requestProperty, null);
            tokenResponse.then((res) => {
                this.token = res.accesstoken;
                this.expired = res.expired;
                resolve(tokenResponse);
            }).catch((err) =>{
                reject(err);
            })    
        });
    }

    protected validation() {
        if (!this.account || this.account === '') 
            return {
                code: BizapiDefine.INVALID_TOKEN.code,
                description: "account is requried."
            };

        if (!this.pw || this.pw === '') 
            return {
                code: BizapiDefine.INVALID_TOKEN.code,
                description: "password is requried."
            };

        return null;
    }
}