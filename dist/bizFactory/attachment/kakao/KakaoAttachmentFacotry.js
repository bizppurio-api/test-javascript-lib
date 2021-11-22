"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoAttachmentFacotry = void 0;
var AC_1 = require("./AC");
var AL_1 = require("./AL");
var BC_1 = require("./BC");
var BK_1 = require("./BK");
var BT_1 = require("./BT");
var DS_1 = require("./DS");
var KakaoImage_1 = require("./KakaoImage");
var MD_1 = require("./MD");
var WL_1 = require("./WL");
var KakaoAttachmentFacotry = /** @class */ (function () {
    function KakaoAttachmentFacotry() {
    }
    KakaoAttachmentFacotry.prototype.createWL = function (name, urlmobile, urlpc) {
        return new WL_1.WL(name).urlmobile(urlmobile).urlpc(urlpc);
    };
    KakaoAttachmentFacotry.prototype.createAL = function (name, schemeios, schemeandroid, urlpc, urlmobile) {
        return new AL_1.AL(name).schemeios(schemeios).schemeandroid(schemeandroid).urlpc(urlpc).urlmobile(urlmobile);
    };
    KakaoAttachmentFacotry.prototype.createDS = function (name) {
        return new DS_1.DS(name);
    };
    KakaoAttachmentFacotry.prototype.createBK = function (name) {
        return new BK_1.BK(name);
    };
    KakaoAttachmentFacotry.prototype.createMD = function (name) {
        return new MD_1.MD(name);
    };
    KakaoAttachmentFacotry.prototype.createBC = function (name) {
        return new BC_1.BC(name);
    };
    KakaoAttachmentFacotry.prototype.createBT = function (name) {
        return new BT_1.BT(name);
    };
    KakaoAttachmentFacotry.prototype.createAC = function () {
        return new AC_1.AC();
    };
    KakaoAttachmentFacotry.prototype.createImage = function (imgurl, imglink) {
        return new KakaoImage_1.KakaoImage().imgurl(imgurl).imglink(imglink);
    };
    return KakaoAttachmentFacotry;
}());
exports.KakaoAttachmentFacotry = KakaoAttachmentFacotry;
