import { AC } from "./AC";
import { AL } from "./AL";
import { BC } from "./BC";
import { BK } from "./BK";
import { BT } from "./BT";
import { DS } from "./DS";
import { KakaoImage } from "./KakaoImage";
import { MD } from "./MD";
import { WL } from "./WL";
export declare class KakaoAttachmentFacotry {
    createWL(name: string, urlmobile: string, urlpc: string): WL;
    createAL(name: string, schemeios: string, schemeandroid: string, urlpc: string, urlmobile: string): AL;
    createDS(name: string): DS;
    createBK(name: string): BK;
    createMD(name: string): MD;
    createBC(name: string): BC;
    createBT(name: string): BT;
    createAC(): AC;
    createImage(imgurl: string, imglink: string): KakaoImage;
}
