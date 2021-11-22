import { FileResponse } from "../../response/FileResponse";
import { BizAction } from "../BizAction";
import { TokenIssuer } from "../TokenIssuer";
import * as fs from 'fs';

export class MMSSendFile extends BizAction<FileResponse> {
    _file?:string;
    
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer);
    }

    file(file:string) {
        this._file = file;
        return this;
    }

    execute():Promise<FileResponse> {
        const boundary = this.getUUID();        
        const requestProperty = {'content-type': `multipart/form-data;charset=utf-8;boundary=${boundary}`}

        this.requestBody = new Array<string>();
        this.requestBody.push(`--${boundary}\r\n`);
        this.requestBody.push(`Content-Disposition: form-data; name="account"\r\n`);
        this.requestBody.push(`Content-Type: text/plain; charset=UTF-8\r\n`);
        this.requestBody.push(`Content-Transfer-Encoding: 8bit\r\n`);
        this.requestBody.push(`\r\n`);
        this.requestBody.push(`${this.tokenIssuer?.getAccount()}\r\n`);
        this.requestBody.push(`--${boundary}\r\n`);
        this.requestBody.push(`Content-Disposition: form-data; name="file"; filename="${this._file}"\r\n`);
        this.requestBody.push(`Content-Type: image/jpeg\r\n`);
        this.requestBody.push(`Content-Transfer-Encoding: binary\r\n`);
        this.requestBody.push(`\r\n`);

        const buffer = Buffer.concat([Buffer.from(this.requestBody.join('')), fs.readFileSync(String(this._file)), Buffer.from(`\r\n--${boundary}--\r\n`)]);

        return this.bizExecute("/v1/file", requestProperty, buffer);
    }

    protected createResponse(response: any): FileResponse {
        try {
            if (response.responseData) {
                const responseData = JSON.parse(response.responseData);
                response.code = responseData.code;
                response.description = responseData.description;
                response.filekey = responseData.filekey;
            }
        } catch (err) {}
                
        return response;
    }

    private getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
            return v.toString(16);
        });
    }
          
    protected validation(): any {
        return null;
    }
}