import { TokenIssuer } from "./TokenIssuer";
import * as https from "https";
import { IncomingMessage } from "http";

https.globalAgent.maxSockets = 10

export abstract class BizAction<T> {
    tokenIssuer?:TokenIssuer;    
    requestBody:any = new Object();

    constructor(tokenIssuer?:TokenIssuer) {
        this.tokenIssuer = tokenIssuer;
    }
    
    protected setMaxSokcets(maxsockets:number) {
        https.globalAgent.maxSockets = Math.min(50, maxsockets);
    }

    protected abstract createResponse(response:any):T;
    protected abstract validation():any;

    protected bizCreateResponse(res:any, responseData:any):T {
        return this.createResponse({
            responseCode: res.statusCode,
            responseMessage: res.statusMessage,
            responseData: responseData
        });
    }

    execute():Promise<T> {
        const requestProperty = {
            'content-type': 'application/json',
            'charset': 'utf-8',
            'Authorization': 'Bearer ' + this.tokenIssuer?.token
        }

        return this.bizExecute("/v3/message", requestProperty, Buffer.from(JSON.stringify(this.requestBody)));
    }

    protected bizExecute(path:string, requestProperty:any, body:any):Promise<T>{
        return new Promise<T>((resolve, reject) => {
            let response = this.validation();
            if (response) {
                resolve(this.bizCreateResponse({}, JSON.stringify(response)));
                return;
            }

            const headers = requestProperty;            
            const option:any = {
                hostname:this.tokenIssuer?.option.domain,
                port:this.tokenIssuer?.option.port,
                'path':path,
                method:'POST',
                headers:headers,
            }

            if (!this.tokenIssuer?.option.rejectUnauthorized) {
                option.rejectUnauthorized = this.tokenIssuer?.option.rejectUnauthorized;
            } 

            const responseCallback = (res:IncomingMessage) => {
                res.setEncoding('utf8');
                res.on('data', (responseData) => {
                    resolve(this.bizCreateResponse(res, String(responseData)));
                })
            }

            const req = https.request(option, responseCallback);
            req.setTimeout(this.tokenIssuer?.option.timeout || 3000, () =>{
                reject('timeout');
                req.destroy();
            })
            
            req.on('error', (err) => {
                reject(err);
                req.destroy();
            })

            if (body) req.write(body)
            req.end()
        })
    }
}