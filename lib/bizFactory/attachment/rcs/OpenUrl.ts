import { RcsAction } from "./RcsAction";

export class OpenUrl extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.urlAction = {
            openUrl: {}
        }
    }

    url(url:string) {
        this.action.urlAction.openUrl.url = url;
        return this;
    }
}