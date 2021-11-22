import { FileResponse } from "../../response/FileResponse";
import { BizAction } from "../BizAction";
import { TokenIssuer } from "../TokenIssuer";
export declare class MMSSendFile extends BizAction<FileResponse> {
    _file?: string;
    constructor(tokenIssuer: TokenIssuer);
    file(file: string): this;
    execute(): Promise<FileResponse>;
    protected createResponse(response: any): FileResponse;
    private getUUID;
    protected validation(): any;
}
