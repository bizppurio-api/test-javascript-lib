import { Resend } from "./Resend";
export declare class ATResend extends Resend {
    constructor();
    message(message: string): this;
    senderkey(senderkey: string): this;
    templatecode(templatecode: string): this;
    button(...button: object[]): this;
    title(title: string): this;
    quickreply(quickreply: string): this;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: any;
    } | null;
}
