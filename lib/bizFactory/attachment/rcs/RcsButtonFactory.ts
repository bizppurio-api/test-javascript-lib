import { ComposeTextMessage } from "./ComposeTextMessage";
import { CopyToClipboard } from "./CopyToClipboard";
import { CreateCalendarEvent } from "./CreateCalendarEvent";
import { OpenUrl } from "./OpenUrl";
import { RequestLocationPush } from "./RequestLocationPush";
import { ShowLocation } from "./ShowLocation";

export class RcsButtonFactory {
    openUrl(displayText:string, url:string) {
        return new OpenUrl(displayText).url(url);
    }

    showLocation(displayText:string, latitude:number, longitude:number, label:string, fallbackUrl:string) {
        return new ShowLocation(displayText).latitude(latitude).longitude(longitude).label(label).fallbackUrl(fallbackUrl);
    }

    requestLocationPush(displayText:string) {
        return new RequestLocationPush(displayText);
    }

    createCalendarEvent(displayText:string, startTime:string, endTime:string, title:string, description:string) {
        return new CreateCalendarEvent(displayText).startTime(startTime).endTime(endTime).title(title).description(description);
    }

    composeTextMessage(displayText:string, phoneNumber:string, text:string) {
        return new ComposeTextMessage(displayText).phoneNumber(phoneNumber).text(text);
    }

    CopyToClipboard(displayText:string, text:string) {
        return new CopyToClipboard(displayText).text(text);
    }

    createSuggestions(...actions:object[]) {
        return {
            'suggestions' :actions
        }
    }
}