import { KakaoButton } from "./KakaoButton";

export class BC extends KakaoButton {
    chat_extra?:string;
    constructor(name:string) {
        super(name, "BC");
    }

    chatextra(chatextra:string) {
        this.chat_extra = chatextra;
        return this;
    }
}