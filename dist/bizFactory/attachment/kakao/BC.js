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
exports.BC = void 0;
var KakaoButton_1 = require("./KakaoButton");
var BC = /** @class */ (function (_super) {
    __extends(BC, _super);
    function BC(name) {
        return _super.call(this, name, "BC") || this;
    }
    BC.prototype.chatextra = function (chatextra) {
        this.chat_extra = chatextra;
        return this;
    };
    return BC;
}(KakaoButton_1.KakaoButton));
exports.BC = BC;
