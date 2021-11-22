import { RcsAction } from "./RcsAction";

export class CreateCalendarEvent extends RcsAction {
    constructor(displayText:string) {
        super(displayText);
        this.action.calendarAction = {
            createCalendarEvent: {}
        }
    }

    startTime(startTime:string) {
        this.action.calendarAction.createCalendarEvent.startTime = startTime;
        return this;
    }

    endTime(endTime:string) {
        this.action.calendarAction.createCalendarEvent.endTime = endTime;
        return this;
    }

    title(title:string) {
        this.action.calendarAction.createCalendarEvent.title = title;
        return this;
    }

    description(description:string) {
        this.action.calendarAction.createCalendarEvent.description = description;
        return this;
    }
}