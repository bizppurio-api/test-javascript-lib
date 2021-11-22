import { BizapiDefine } from "../../common/BizapiDefine";
import { TokenIssuer } from "../TokenIssuer";
import { Send } from "./Send";

export class MMSSend extends Send {
    constructor(tokenIssuer:TokenIssuer) {
        super(tokenIssuer, "mms");
        this.content.mms = this.contentDetail;
    }

    message(message:string) {
        this.contentDetail.message = message;
        return this;
    }

    subject(subject:string) {
        this.contentDetail.subject = subject;
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

        this.contentDetail.file = file;
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

    protected validation() {
        this.requiredFieldByType.push('content.mms.message');
        this.maxFiledByType.set('content.mms.message', 2000);
        this.maxFiledByType.set('content.mms.subject', 64);

        let files = this.contentDetail.file;
        console.log(files);

        if (!files || !Array.isArray(files) || files.length === 0) {
            return {code: BizapiDefine.INVALID_MESSAGE.code,description: 'file[] is required',refkey: this.requestBody.refkey}
        }

        if (files.length > 3) {
            return {code: BizapiDefine.INVALID_MESSAGE.code,description: `file[] maximum size is 3 (size:${files.length})`,refkey: this.requestBody.refkey}
        }

        for (let file of files) {
            console.log(!file.type);
            if (!file.type || (typeof file.type === 'string' && file.type === '')) {
                return {code: BizapiDefine.INVALID_MESSAGE.code,description: 'file type is not empty',refkey: this.requestBody.refkey}
            }
            if (!file.key || (typeof file.key === 'string' && file.key === '')) {
                return {code: BizapiDefine.INVALID_MESSAGE.code,description: 'file key is not empty',refkey: this.requestBody.refkey}
            }
        }
        return super.validation();
    }
}