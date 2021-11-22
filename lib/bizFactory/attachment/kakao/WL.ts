import { KakaoButton } from "./KakaoButton";

export class WL extends KakaoButton {
    private url_mobile?:string;
    private url_pc?:string;
    constructor(name:string) {
        super(name, "WL");
    }

    urlmobile(urlmobile:string) {
        this.url_mobile = urlmobile;
        return this;
    }

    urlpc(urlpc:string) {
        this.url_pc = urlpc;
        return this;
    }
}