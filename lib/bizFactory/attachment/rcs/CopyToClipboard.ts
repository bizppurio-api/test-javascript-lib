import { RcsAction } from "./RcsAction";

export class CopyToClipboard extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.clipboardAction = {
            copyToClipboard: {}
        };
    }

    text(text:string) {
        this.action.clipboardAction.copyToClipboard.text = text;
        return this;
    }
}