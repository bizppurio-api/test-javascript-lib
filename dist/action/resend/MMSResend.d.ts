import { Resend } from "./Resend";
export declare class MMSResend extends Resend {
    constructor();
    message(message: string): this;
    subject(subject: string): this;
    filekey(...filekeys: Array<string>): this;
    private getFileType;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: any;
    } | null;
}
