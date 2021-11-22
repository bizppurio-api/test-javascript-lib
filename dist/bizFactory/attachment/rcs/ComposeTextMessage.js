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
exports.ComposeTextMessage = void 0;
var RcsAction_1 = require("./RcsAction");
var ComposeTextMessage = /** @class */ (function (_super) {
    __extends(ComposeTextMessage, _super);
    function ComposeTextMessage(displayText) {
        var _this = _super.call(this, displayText) || this;
        _this.action.composeAction = {
            composeTextMessage: {}
        };
        return _this;
    }
    ComposeTextMessage.prototype.phoneNumber = function (phoneNumber) {
        this.action.composeAction.composeTextMessage.phoneNumber = phoneNumber;
        return this;
    };
    ComposeTextMessage.prototype.text = function (text) {
        this.action.composeAction.composeTextMessage.text = text;
        return this;
    };
    return ComposeTextMessage;
}(RcsAction_1.RcsAction));
exports.ComposeTextMessage = ComposeTextMessage;
