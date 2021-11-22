export class KakaoImage {
    private img_url?:string;
    private img_link?:string;

    imgurl(imgurl:string) {
        this.img_url = imgurl;
        return this;
    }

    imglink(imglink:string) {
        this.img_link = imglink;
        return this;
    }
}