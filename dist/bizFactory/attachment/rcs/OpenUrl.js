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
exports.OpenUrl = void 0;
var RcsAction_1 = require("./RcsAction");
var OpenUrl = /** @class */ (function (_super) {
    __extends(OpenUrl, _super);
    function OpenUrl(displayText) {
        var _this = _super.call(this, displayText) || this;
        _this.action.urlAction = {
            openUrl: {}
        };
        return _this;
    }
    OpenUrl.prototype.url = function (url) {
        this.action.urlAction.openUrl.url = url;
        return this;
    };
    return OpenUrl;
}(RcsAction_1.RcsAction));
exports.OpenUrl = OpenUrl;
