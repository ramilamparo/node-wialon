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
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const __1 = require("..");
class Core extends __1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.searchItems = (params) => {
            return __1.Wialon.execute("core/search_items", params, this.user.eid, this.host);
        };
        this.searchItem = (params) => {
            return __1.Wialon.execute("core/search_item", params, this.user.eid, this.host);
        };
        this.batch = (params) => __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("params", JSON.stringify({ params, flags: 0 }));
            formData.append("sid", this.user.eid);
            const res = yield axios_1.default.post(`${this.host}/wialon/ajax.html?sid=${this.user.eid}&svc=core/batch`, formData, {
                headers: Object.assign({}, formData.getHeaders()),
                timeout: 0
            });
            const errors = res.data.reduce((batchErrors, value) => {
                if (value && value.error) {
                    batchErrors.push(new __1.WialonError(value));
                }
                return batchErrors;
            }, []);
            if (errors.length) {
                throw new __1.WialonBatchError(errors);
            }
            return res.data;
        });
    }
}
exports.Core = Core;
