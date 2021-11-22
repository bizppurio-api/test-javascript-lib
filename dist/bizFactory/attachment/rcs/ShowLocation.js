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
exports.ShowLocation = void 0;
var RcsAction_1 = require("./RcsAction");
var ShowLocation = /** @class */ (function (_super) {
    __extends(ShowLocation, _super);
    function ShowLocation(displayText) {
        var _this = _super.call(this, displayText) || this;
        _this.action.mapAction = {
            showLocation: {
                location: {}
            }
        };
        return _this;
    }
    ShowLocation.prototype.latitude = function (latitude) {
        this.action.mapAction.showLocation.location.latitude = latitude;
        return this;
    };
    ShowLocation.prototype.longitude = function (longitude) {
        this.action.mapAction.showLocation.location.longitude = longitude;
        return this;
    };
    ShowLocation.prototype.query = function (query) {
        this.action.mapAction.showLocation.location.query = query;
        return this;
    };
    ShowLocation.prototype.label = function (label) {
        this.action.mapAction.showLocation.location.label = label;
        return this;
    };
    ShowLocation.prototype.fallbackUrl = function (fallbackUrl) {
        this.action.mapAction.showLocation.fallbackUrl = fallbackUrl;
        return this;
    };
    return ShowLocation;
}(RcsAction_1.RcsAction));
exports.ShowLocation = ShowLocation;
