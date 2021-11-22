import { Resend } from "./Resend";
export declare class SMSResend extends Resend {
    constructor();
    message(message: string): this;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: string;
    } | null;
}
