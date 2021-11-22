import { KakaoButton } from "./KakaoButton";
export declare class AL extends KakaoButton {
    private url_mobile?;
    private url_pc?;
    private scheme_ios?;
    private scheme_android?;
    constructor(name: string);
    urlmobile(urlmobile: string): this;
    urlpc(urlpc: string): this;
    schemeios(schemeios: string): this;
    schemeandroid(schemeandroid: string): this;
}
