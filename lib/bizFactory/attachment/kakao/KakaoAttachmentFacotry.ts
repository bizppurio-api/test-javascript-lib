import { AC } from "./AC";
import { AL } from "./AL";
import { BC } from "./BC";
import { BK } from "./BK";
import { BT } from "./BT";
import { DS } from "./DS";
import { KakaoImage } from "./KakaoImage";
import { MD } from "./MD";
import { WL } from "./WL";

export class KakaoAttachmentFacotry {
    createWL(name:string, urlmobile:string, urlpc:string) {
        return new WL(name).urlmobile(urlmobile).urlpc(urlpc);
    }

    createAL(name:string, schemeios:string, schemeandroid:string, urlpc:string, urlmobile:string) {
        return new AL(name).schemeios(schemeios).schemeandroid(schemeandroid).urlpc(urlpc).urlmobile(urlmobile);
    }

    createDS(name:string) {
        return new DS(name);
    }
    
    createBK(name:string) {
        return new BK(name);
    }
    
    createMD(name:string) {
        return new MD(name);
    }
    
    createBC(name:string) {
        return new BC(name);
    }
    
    createBT(name:string) {
        return new BT(name);
    }    
    
    createAC() {
        return new AC();
    }

    createImage(imgurl:string, imglink:string) {
        return new KakaoImage().imgurl(imgurl).imglink(imglink);
    }
}