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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const WialonBatchError_1 = require("../WialonBatchError");
const WialonError_1 = require("../WialonError");
const RemoteAPI_1 = require("../RemoteAPI");
class Core extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.searchItems = (params) => {
            return RemoteAPI_1.RemoteAPI.execute("core/search_items", params, this.sessionId, this.host);
        };
        this.searchItem = (params) => {
            return RemoteAPI_1.RemoteAPI.execute("core/search_item", params, this.sessionId, this.host);
        };
        this.batch = (params) => __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("params", JSON.stringify({ params, flags: 0 }));
            formData.append("sid", this.sessionId);
            const res = yield axios_1.default.post(`${this.host}/wialon/ajax.html?sid=${this.sessionId}&svc=core/batch`, formData, {
                headers: Object.assign({}, formData.getHeaders()),
                timeout: 0
            });
            if (res.data instanceof Array) {
                const errors = res.data.reduce((batchErrors, value) => {
                    if (value && "error" in value) {
                        batchErrors.push(new WialonError_1.WialonError(value));
                    }
                    return batchErrors;
                }, []);
                if (errors.length) {
                    throw new WialonBatchError_1.WialonBatchError(errors);
                }
                return res.data;
            }
            throw new Error("Unknown response.");
        });
    }
}
exports.Core = Core;
