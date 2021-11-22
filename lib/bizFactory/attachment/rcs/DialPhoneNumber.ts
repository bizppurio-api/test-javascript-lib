import { RcsAction } from "./RcsAction";

export class DialPhoneNumber extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.dialerAction = {
            dialPhoneNumber: {}            
        }
    }

    phoneNumber(phoneNumber:string) {
        this.action.dialerAction.dialPhoneNumber.phoneNumber = phoneNumber;
        return this;
    }

}