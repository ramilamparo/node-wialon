"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const WialonBatchError_1 = require("../WialonBatchError");
const WialonError_1 = require("../WialonError");
const RemoteAPI_1 = require("../RemoteAPI");
class Core extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.searchItems = (params) => {
            return RemoteAPI_1.RemoteAPI.execute("core/search_items", params, this.sessionId, this.options.host);
        };
        this.searchItem = (params) => {
            return RemoteAPI_1.RemoteAPI.execute("core/search_item", params, this.sessionId, this.options.host);
        };
        this.batch = (params) => __awaiter(this, void 0, void 0, function* () {
            const data = yield RemoteAPI_1.RemoteAPI.execute("core/batch", { params, flags: 0 }, this.sessionId);
            if (data instanceof Array) {
                const batch = data.reduce((batchErrors, value, index) => {
                    if (value && "error" in value) {
                        batchErrors.addError(new WialonError_1.WialonError(value), index);
                    }
                    return batchErrors;
                }, new WialonBatchError_1.WialonBatchError(data));
                if (batch.hasErrors()) {
                    throw batch;
                }
                return data;
            }
            throw new Error("Unknown response.");
        });
    }
}
exports.Core = Core;
