import { RcsAction } from "./RcsAction";

export class ShowLocation extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.mapAction = {
            showLocation: {
                location: {}
            }
        }
    }

    latitude(latitude:number) {
        this.action.mapAction.showLocation.location.latitude = latitude;
        return this;
    }

    longitude(longitude:number) {
        this.action.mapAction.showLocation.location.longitude = longitude;
        return this;
    }

    query(query:string) {
        this.action.mapAction.showLocation.location.query = query;
        return this;
    }

    label(label:string) {
        this.action.mapAction.showLocation.location.label = label;
        return this;
    }

    fallbackUrl(fallbackUrl:string) {
        this.action.mapAction.showLocation.fallbackUrl = fallbackUrl;
        return this;
    }
}