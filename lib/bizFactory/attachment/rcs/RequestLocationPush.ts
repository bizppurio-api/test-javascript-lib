import { RcsAction } from "./RcsAction";

export class RequestLocationPush extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.urlAction = {
            mapAction: {
                requestLocationPush: {}
            }
        }
    }
}