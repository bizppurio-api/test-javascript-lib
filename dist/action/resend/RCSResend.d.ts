import { Resend } from "./Resend";
export declare class RCSResend extends Resend {
    constructor();
    message(message: object): this;
    messagebaseid(messagebaseid: string): this;
    chatbotid(chatbotid: string): this;
    agencyid(agencyid: string): this;
    header(header: string): this;
    footer(footer: string): this;
    copyallowed(copyallowed: string): this;
    button(...button: object[]): this;
    validation(requestBody: any): {
        code: string;
        description: string;
        refkey: string;
    } | null;
}
