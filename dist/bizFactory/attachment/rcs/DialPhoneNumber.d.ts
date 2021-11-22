import { RcsAction } from "./RcsAction";
export declare class DialPhoneNumber extends RcsAction {
    constructor(displayText: string);
    phoneNumber(phoneNumber: string): this;
}
