"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BizAction = void 0;
var https = require("https");
https.globalAgent.maxSockets = 10;
var BizAction = /** @class */ (function () {
    function BizAction(tokenIssuer) {
        this.requestBody = new Object();
        this.tokenIssuer = tokenIssuer;
    }
    BizAction.prototype.setMaxSokcets = function (maxsockets) {
        https.globalAgent.maxSockets = Math.min(50, maxsockets);
    };
    BizAction.prototype.bizCreateResponse = function (res, responseData) {
        return this.createResponse({
            responseCode: res.statusCode,
            responseMessage: res.statusMessage,
            responseData: responseData
        });
    };
    BizAction.prototype.execute = function () {
        var _a;
        var requestProperty = {
            'content-type': 'application/json',
            'charset': 'utf-8',
            'Authorization': 'Bearer ' + ((_a = this.tokenIssuer) === null || _a === void 0 ? void 0 : _a.token)
        };
        return this.bizExecute("/v3/message", requestProperty, Buffer.from(JSON.stringify(this.requestBody)));
    };
    BizAction.prototype.bizExecute = function (path, requestProperty, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a, _b, _c, _d, _e;
            var response = _this.validation();
            if (response) {
                resolve(_this.bizCreateResponse({}, JSON.stringify(response)));
                return;
            }
            var headers = requestProperty;
            var option = {
                hostname: (_a = _this.tokenIssuer) === null || _a === void 0 ? void 0 : _a.option.domain,
                port: (_b = _this.tokenIssuer) === null || _b === void 0 ? void 0 : _b.option.port,
                'path': path,
                method: 'POST',
                headers: headers,
            };
            if (!((_c = _this.tokenIssuer) === null || _c === void 0 ? void 0 : _c.option.rejectUnauthorized)) {
                option.rejectUnauthorized = (_d = _this.tokenIssuer) === null || _d === void 0 ? void 0 : _d.option.rejectUnauthorized;
            }
            var responseCallback = function (res) {
                res.setEncoding('utf8');
                res.on('data', function (responseData) {
                    resolve(_this.bizCreateResponse(res, String(responseData)));
                });
            };
            var req = https.request(option, responseCallback);
            req.setTimeout(((_e = _this.tokenIssuer) === null || _e === void 0 ? void 0 : _e.option.timeout) || 3000, function () {
                reject('timeout');
                req.destroy();
            });
            req.on('error', function (err) {
                reject(err);
                req.destroy();
            });
            if (body)
                req.write(body);
            req.end();
        });
    };
    return BizAction;
}());
exports.BizAction = BizAction;
