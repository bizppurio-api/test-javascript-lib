import { RcsAction } from "./RcsAction";
export declare class CreateCalendarEvent extends RcsAction {
    constructor(displayText: string);
    startTime(startTime: string): this;
    endTime(endTime: string): this;
    title(title: string): this;
    description(description: string): this;
}
