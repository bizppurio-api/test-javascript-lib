import { RcsAction } from "./RcsAction";

export class ComposeTextMessage extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.composeAction = {
            composeTextMessage: {}
        }
    }

    phoneNumber(phoneNumber:string) {
        this.action.composeAction.composeTextMessage.phoneNumber = phoneNumber;
        return this;
    }

    text(text:string) {
        this.action.composeAction.composeTextMessage.text = text;
        return this;
    }
}