import { ComposeTextMessage } from "./ComposeTextMessage";
import { CopyToClipboard } from "./CopyToClipboard";
import { CreateCalendarEvent } from "./CreateCalendarEvent";
import { OpenUrl } from "./OpenUrl";
import { RequestLocationPush } from "./RequestLocationPush";
import { ShowLocation } from "./ShowLocation";
export declare class RcsButtonFactory {
    openUrl(displayText: string, url: string): OpenUrl;
    showLocation(displayText: string, latitude: number, longitude: number, label: string, fallbackUrl: string): ShowLocation;
    requestLocationPush(displayText: string): RequestLocationPush;
    createCalendarEvent(displayText: string, startTime: string, endTime: string, title: string, description: string): CreateCalendarEvent;
    composeTextMessage(displayText: string, phoneNumber: string, text: string): ComposeTextMessage;
    CopyToClipboard(displayText: string, text: string): CopyToClipboard;
    createSuggestions(...actions: object[]): {
        suggestions: object[];
    };
}
