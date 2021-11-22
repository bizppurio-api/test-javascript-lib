import { KakaoButton } from "./KakaoButton";

export class AL extends KakaoButton {
    private url_mobile?:string;
    private url_pc?:string;
    private scheme_ios?:string;
    private scheme_android?:string;

    constructor(name:string) {
        super(name, "AL");
    }

    urlmobile(urlmobile:string) {
        this.url_mobile = urlmobile;
        return this;
    }

    urlpc(urlpc:string) {
        this.url_pc = urlpc;
        return this;
    }

    schemeios(schemeios:string) {
        this.scheme_ios = schemeios;
        return this;
    }

    schemeandroid(schemeandroid:string) {
        this.scheme_android = schemeandroid;
        return this;
    }
}