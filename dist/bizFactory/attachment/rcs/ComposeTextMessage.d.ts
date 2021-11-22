import { RcsAction } from "./RcsAction";
export declare class ComposeTextMessage extends RcsAction {
    constructor(displayText: string);
    phoneNumber(phoneNumber: string): this;
    text(text: string): this;
}
