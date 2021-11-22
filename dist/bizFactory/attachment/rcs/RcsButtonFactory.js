"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RcsButtonFactory = void 0;
var ComposeTextMessage_1 = require("./ComposeTextMessage");
var CopyToClipboard_1 = require("./CopyToClipboard");
var CreateCalendarEvent_1 = require("./CreateCalendarEvent");
var OpenUrl_1 = require("./OpenUrl");
var RequestLocationPush_1 = require("./RequestLocationPush");
var ShowLocation_1 = require("./ShowLocation");
var RcsButtonFactory = /** @class */ (function () {
    function RcsButtonFactory() {
    }
    RcsButtonFactory.prototype.openUrl = function (displayText, url) {
        return new OpenUrl_1.OpenUrl(displayText).url(url);
    };
    RcsButtonFactory.prototype.showLocation = function (displayText, latitude, longitude, label, fallbackUrl) {
        return new ShowLocation_1.ShowLocation(displayText).latitude(latitude).longitude(longitude).label(label).fallbackUrl(fallbackUrl);
    };
    RcsButtonFactory.prototype.requestLocationPush = function (displayText) {
        return new RequestLocationPush_1.RequestLocationPush(displayText);
    };
    RcsButtonFactory.prototype.createCalendarEvent = function (displayText, startTime, endTime, title, description) {
        return new CreateCalendarEvent_1.CreateCalendarEvent(displayText).startTime(startTime).endTime(endTime).title(title).description(description);
    };
    RcsButtonFactory.prototype.composeTextMessage = function (displayText, phoneNumber, text) {
        return new ComposeTextMessage_1.ComposeTextMessage(displayText).phoneNumber(phoneNumber).text(text);
    };
    RcsButtonFactory.prototype.CopyToClipboard = function (displayText, text) {
        return new CopyToClipboard_1.CopyToClipboard(displayText).text(text);
    };
    RcsButtonFactory.prototype.createSuggestions = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return {
            'suggestions': actions
        };
    };
    return RcsButtonFactory;
}());
exports.RcsButtonFactory = RcsButtonFactory;
