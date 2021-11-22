"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByteLength = exports.divideKey = exports.maxLength = exports.validation = void 0;
var BizapiDefine_1 = require("./BizapiDefine");
function validation(requestBody, requiredFieldByType, maxFiledByType) {
    var o;
    for (var _i = 0, requiredFieldByType_1 = requiredFieldByType; _i < requiredFieldByType_1.length; _i++) {
        var field = requiredFieldByType_1[_i];
        o = requried(requestBody, field, requestBody.refkey);
        if (o)
            return o;
    }
    for (var _a = 0, _b = Array.from(maxFiledByType); _a < _b.length; _a++) {
        var kv = _b[_a];
        o = maxByte(requestBody, kv[0], kv[1], requestBody.refkey);
        if (o)
            return o;
    }
    return null;
}
exports.validation = validation;
function requried(jsonObject, keyStr, refkey) {
    var value = divideKey(jsonObject, keyStr);
    if (!value || Object.keys(value).length === 0) {
        return {
            code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code,
            description: "The " + keyStr + " field is required.",
            refkey: refkey
        };
    }
    return null;
}
function maxByte(jsonObject, keyStr, max, refkey) {
    if (max === void 0) { max = 0; }
    var value = divideKey(jsonObject, keyStr);
    if (value && (0, exports.getByteLength)(value) > max) {
        return {
            code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code,
            description: "The " + keyStr + " may not be greater than " + max + " characters.",
            refkey: refkey
        };
    }
    return null;
}
function maxLength(jsonObject, keyStr, max, refkey) {
    if (max === void 0) { max = 0; }
    var value = divideKey(jsonObject, keyStr);
    if (value && String(value).length > max) {
        return {
            code: BizapiDefine_1.BizapiDefine.INVALID_MESSAGE.code,
            description: "The " + keyStr + " may not be greater than " + max + " length.",
            refkey: refkey
        };
    }
    return null;
}
exports.maxLength = maxLength;
function divideKey(requestBody, keyStr) {
    var keyArr = keyStr.split('.');
    var value;
    var o = requestBody;
    keyArr.forEach(function (key) {
        value = o[key];
        if (!value)
            return;
        o = value;
    });
    return value;
}
exports.divideKey = divideKey;
var getByteLength = function (s, b, i, c) {
    for (b = i = 0; c = s.charCodeAt(i++);) {
        if (c == "\\") {
            if (s.charCodeAt(i++) == 'n') {
                b += 1;
                continue;
            }
            else {
                b += 2;
            }
        }
        b += c >> 7 ? 2 : 1;
    }
    return b;
};
exports.getByteLength = getByteLength;
