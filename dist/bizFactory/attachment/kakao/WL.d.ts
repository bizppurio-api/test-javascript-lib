import { KakaoButton } from "./KakaoButton";
export declare class WL extends KakaoButton {
    private url_mobile?;
    private url_pc?;
    constructor(name: string);
    urlmobile(urlmobile: string): this;
    urlpc(urlpc: string): this;
}
