import * as BizapiUtil from '../../common/BizapiUtil'

export class Resend {
    recontentDetail:any = {};
    type:string;

    constructor(type:string) {
        this.type = type;
    }

    protected requiredFieldByType = new Array<string>();
    protected maxFiledByType = new Map<string, number>();

    validation(requestBody:any) {
        return BizapiUtil.validation(requestBody, this.requiredFieldByType, this.maxFiledByType);
    }
}