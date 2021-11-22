import { RcsAction } from "./RcsAction";
export declare class ShowLocation extends RcsAction {
    constructor(displayText: string);
    latitude(latitude: number): this;
    longitude(longitude: number): this;
    query(query: string): this;
    label(label: string): this;
    fallbackUrl(fallbackUrl: string): this;
}
