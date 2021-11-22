import { Resend } from "./Resend";
import { BizapiDefine } from "../../common/BizapiDefine";

export class MMSResend extends Resend {
    constructor() {
        super("mms")
    }

    message(message:string) {
        this.recontentDetail.message = message;
        return this;
    }

    subject(subject:string) {
        this.recontentDetail.subject = subject;
        return this;
    }    

    filekey(...filekeys:Array<string>) {
        const file = new Array();
        filekeys.forEach((filekey) => {
            file.push({
                type : this.getFileType(filekey),
                key : filekey
            })
        })

        this.recontentDetail.file = file;
        return this;
    }

    private getFileType(filekey:string) {
        if(filekey) {
            const extension = filekey.substring(filekey.lastIndexOf(".") + 1).toUpperCase();
            switch(extension) {
                case 'JPG':
                case 'JPEG':
                    return "IMG";
            }
        }
        return null;
    }

    validation(requestBody:any) {
        this.requiredFieldByType.push('recontent.mms.message');
        this.maxFiledByType.set('recontent.mms.message', 2000);
        this.maxFiledByType.set('recontent.mms.subject', 64);

        let files = this.recontentDetail.file;

        if (!files || !Array.isArray(files) || files.length === 0) {
            return {code: BizapiDefine.INVALID_MESSAGE.code,description: 'file[] is required',refkey: requestBody.refkey}
        }

        if (files.length > 3) {
            return {code: BizapiDefine.INVALID_MESSAGE.code,description: `file[] maximum size is 3 (size:${files.length})`,refkey: requestBody.refkey}
        }

        for (let file of files) {
            if (!file.type || (typeof file.type === 'string' && file.type === '')) {
                return {code: BizapiDefine.INVALID_MESSAGE.code,description: 'file type is not empty',refkey: requestBody.refkey}
            }
            if (!file.key || (typeof file.key === 'string' && file.key === '')) {
                return {code: BizapiDefine.INVALID_MESSAGE.code,description: 'file key is not empty',refkey: requestBody.refkey}
            }
        }
        return super.validation(requestBody);
    }
}