import { KakaoButton } from "./KakaoButton";
export declare class BT extends KakaoButton {
    chat_extra?: string;
    chat_event?: string;
    constructor(name: string);
    chatextra(chatextra: string): this;
    chatevent(chatevent: string): this;
}
