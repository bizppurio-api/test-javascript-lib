export declare class Resend {
    recontentDetail: any;
    type: string;
    constructor(type: string);
    protected requiredFieldByType: string[];
    protected maxFiledByType: Map<string, number>;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: string;
    } | null;
}
