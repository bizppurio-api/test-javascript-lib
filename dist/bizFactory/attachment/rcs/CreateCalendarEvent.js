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
exports.CreateCalendarEvent = void 0;
var RcsAction_1 = require("./RcsAction");
var CreateCalendarEvent = /** @class */ (function (_super) {
    __extends(CreateCalendarEvent, _super);
    function CreateCalendarEvent(displayText) {
        var _this = _super.call(this, displayText) || this;
        _this.action.calendarAction = {
            createCalendarEvent: {}
        };
        return _this;
    }
    CreateCalendarEvent.prototype.startTime = function (startTime) {
        this.action.calendarAction.createCalendarEvent.startTime = startTime;
        return this;
    };
    CreateCalendarEvent.prototype.endTime = function (endTime) {
        this.action.calendarAction.createCalendarEvent.endTime = endTime;
        return this;
    };
    CreateCalendarEvent.prototype.title = function (title) {
        this.action.calendarAction.createCalendarEvent.title = title;
        return this;
    };
    CreateCalendarEvent.prototype.description = function (description) {
        this.action.calendarAction.createCalendarEvent.description = description;
        return this;
    };
    return CreateCalendarEvent;
}(RcsAction_1.RcsAction));
exports.CreateCalendarEvent = CreateCalendarEvent;
