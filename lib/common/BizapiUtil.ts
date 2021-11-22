import { BizapiDefine } from "./BizapiDefine";

export function validation(requestBody:any, requiredFieldByType:string[], maxFiledByType:Map<string,number>) {
    let o;
    for (let field of requiredFieldByType) {
        o = requried(requestBody, field, requestBody.refkey);
        if (o) return o;
    }

    for (let kv of Array.from(maxFiledByType)) {
        o = maxByte(requestBody, kv[0], kv[1], requestBody.refkey);
        if (o) return o;
    }

    return null;
}

function requried(jsonObject:object, keyStr:string, refkey:string) {
    const value = divideKey(jsonObject, keyStr);

    if (!value || Object.keys(value).length === 0) {
        return {
            code: BizapiDefine.INVALID_MESSAGE.code,
            description: `The ${keyStr} field is required.`,
            refkey: refkey 
        };
    }

    return null;
}

function maxByte(jsonObject:object, keyStr:string, max = 0, refkey:string) {    
    const value = divideKey(jsonObject, keyStr);

    if (value && getByteLength(value) > max) {
        return {
            code: BizapiDefine.INVALID_MESSAGE.code,
            description: `The ${keyStr} may not be greater than ${max} characters.`,
            refkey: refkey 
        }
    }

    return null;
}

export function maxLength(jsonObject:object, keyStr:string, max = 0, refkey:string) {    
    const value = divideKey(jsonObject, keyStr);

    if (value && String(value).length > max) {
        return {
            code: BizapiDefine.INVALID_MESSAGE.code,
            description: `The ${keyStr} may not be greater than ${max} length.`,
            refkey: refkey 
        }
    }

    return null;
}

export function divideKey(requestBody: any, keyStr: string):any {
    const keyArr = keyStr.split('.');

    let value;
    let o = requestBody;
    keyArr.forEach(key => {
        value = o[key];
        if (!value) return;
        o = value;
    });

    return value;
}


export const getByteLength = function (s:any, b?: any, i?: any, c?: any):number {
    for (b = i = 0; c = s.charCodeAt(i++); ) {
        if (c=="\\") {
            if (s.charCodeAt(i++)=='n') {
                b+=1;
                continue;
            } else {
                b+=2;
            }
        }
        b += c >> 7 ? 2 : 1;
    }
    return b;
};
