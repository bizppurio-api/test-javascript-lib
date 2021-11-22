import { Resend } from "./Resend";
export declare class LMSResend extends Resend {
    constructor();
    message(message: string): this;
    subject(subject: string): this;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: string;
    } | null;
}
