"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var call = require("./call");
var globalState = require("./global-state");
var header = require("./header");
var history = require("./history");
var machine = require("./machine");
var message = require("./message");
var accessWitness = require("./accessWitness");
var storage = require("./storage");
var logs = require("./logs");
var toHex = require("./toHex");
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, call), globalState), header), history), machine), message), accessWitness), storage), logs), { toHex: toHex });
//# sourceMappingURL=index.js.map