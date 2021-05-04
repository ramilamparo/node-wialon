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
exports.RemoteAPI = exports.defaultHost = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const WialonError_1 = require("./WialonError");
exports.defaultHost = "https://hst-api.wialon.com/wialon/ajax.html";
class RemoteAPI {
    constructor(session, options) {
        this.session = session;
        this.getAuthDetails = () => __awaiter(this, void 0, void 0, function* () {
            if (this.options.auth) {
                return this.options.auth;
            }
            const response = yield RemoteAPI.execute("core/duplicate", { operateAs: "", continueCurrentSession: true }, this.sessionId);
            this.options.auth = response;
            return response;
        });
        this.options = Object.assign(Object.assign({}, options), { host: (options === null || options === void 0 ? void 0 : options.host) || exports.defaultHost });
    }
    get sessionId() {
        return this.session;
    }
}
exports.RemoteAPI = RemoteAPI;
RemoteAPI.buildUrl = (url, svc, params, sid) => {
    let composedUrl = url;
    if (svc || params || sid) {
        composedUrl += "?";
        if (svc) {
            composedUrl += `svc=${svc}`;
        }
        if (params) {
            composedUrl += `&params=${JSON.stringify(params)}`;
        }
        if (sid) {
            composedUrl += `&sid=${sid}`;
        }
    }
    return composedUrl;
};
RemoteAPI.execute = (svc, params, sid, url = exports.defaultHost) => __awaiter(void 0, void 0, void 0, function* () {
    const formData = new form_data_1.default();
    if (params) {
        formData.append("params", JSON.stringify(params));
    }
    if (sid) {
        formData.append("sid", sid);
    }
    const res = yield axios_1.default.post(RemoteAPI.buildUrl(url, svc), formData, {
        headers: Object.assign({}, formData.getHeaders()),
        timeout: 0
    });
    if ("error" in res.data && res.data.error) {
        throw new WialonError_1.WialonError(res.data);
    }
    return res.data;
});
