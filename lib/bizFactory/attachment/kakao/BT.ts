import { KakaoButton } from "./KakaoButton";

export class BT extends KakaoButton {
    chat_extra?:string;
    chat_event?:string;
    constructor(name:string) {
        super(name, "BT");
    }

    chatextra(chatextra:string) {
        this.chat_extra = chatextra;
        return this;
    }

    chatevent(chatevent:string) {
        this.chat_event = chatevent;
        return this;
    }
}