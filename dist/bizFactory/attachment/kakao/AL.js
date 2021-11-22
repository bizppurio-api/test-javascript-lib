"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AL = void 0;
var KakaoButton_1 = require("./KakaoButton");
var AL = /** @class */ (function (_super) {
    __extends(AL, _super);
    function AL(name) {
        return _super.call(this, name, "AL") || this;
    }
    AL.prototype.urlmobile = function (urlmobile) {
        this.url_mobile = urlmobile;
        return this;
    };
    AL.prototype.urlpc = function (urlpc) {
        this.url_pc = urlpc;
        return this;
    };
    AL.prototype.schemeios = function (schemeios) {
        this.scheme_ios = schemeios;
        return this;
    };
    AL.prototype.schemeandroid = function (schemeandroid) {
        this.scheme_android = schemeandroid;
        return this;
    };
    return AL;
}(KakaoButton_1.KakaoButton));
exports.AL = AL;
