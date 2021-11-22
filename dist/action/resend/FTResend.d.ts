import { Resend } from "./Resend";
export declare class FTResend extends Resend {
    constructor();
    message(message: string): this;
    senderkey(senderkey: string): this;
    userkey(userkey: string): this;
    adflag(adflag: string): this;
    button(...buttons: Array<object>): this;
    image(image: object): this;
    wide(wide: string): this;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: any;
    } | null;
}
