import { RcsAction } from "./RcsAction";
export declare class OpenUrl extends RcsAction {
    constructor(displayText: string);
    url(url: string): this;
}
