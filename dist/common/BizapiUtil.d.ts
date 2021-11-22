export declare function validation(requestBody: any, requiredFieldByType: string[], maxFiledByType: Map<string, number>): {
    code: string;
    description: string;
    refkey: string;
} | null;
export declare function maxLength(jsonObject: object, keyStr: string, max: number | undefined, refkey: string): {
    code: string;
    description: string;
    refkey: string;
} | null;
export declare function divideKey(requestBody: any, keyStr: string): any;
export declare const getByteLength: (s: any, b?: any, i?: any, c?: any) => number;
