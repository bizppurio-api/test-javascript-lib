"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoImage = void 0;
var KakaoImage = /** @class */ (function () {
    function KakaoImage() {
    }
    KakaoImage.prototype.imgurl = function (imgurl) {
        this.img_url = imgurl;
        return this;
    };
    KakaoImage.prototype.imglink = function (imglink) {
        this.img_link = imglink;
        return this;
    };
    return KakaoImage;
}());
exports.KakaoImage = KakaoImage;
