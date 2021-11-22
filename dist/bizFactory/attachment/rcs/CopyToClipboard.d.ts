import { RcsAction } from "./RcsAction";
export declare class CopyToClipboard extends RcsAction {
    constructor(displayText: string);
    text(text: string): this;
}
