import { TokenIssuer } from "../../action/TokenIssuer";

export class MessageFactory {
    tokenIssuer:TokenIssuer;

    constructor(tokenIssuer:TokenIssuer) {
        this.tokenIssuer = tokenIssuer;
    }
}