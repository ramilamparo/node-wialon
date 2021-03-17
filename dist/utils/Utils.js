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
exports.Utils = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const RemoteAPI_1 = require("../RemoteAPI");
const core_1 = require("../core");
class Utils extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.getUnits = ({ flags = 1 }) => {
            const core = new core_1.Core(this.sessionId, this.options);
            return core.searchItems({
                spec: {
                    itemsType: "avl_unit",
                    propName: "sys_name",
                    propValueMask: "*",
                    sortType: "sys_name",
                    propType: "property"
                },
                force: 1,
                flags,
                from: 0,
                to: 0
            });
        };
        this.getAddress = (params) => __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("uid", String(params.uid));
            formData.append("sid", this.sessionId);
            formData.append("flags", String(params.flags));
            formData.append("coords", JSON.stringify(params.coords));
            if (params.city_radius) {
                formData.append("city_radius", String(params.city_radius));
            }
            if (params.dist_from_unit) {
                formData.append("dist_from_unit", String(params.dist_from_unit));
            }
            if (params.txt_dist) {
                formData.append("txt_dist", String(params.txt_dist));
            }
            const hostUrl = new URL(this.options.host);
            const res = yield axios_1.default.post(`https://geocode-maps.wialon.com/${hostUrl.host}/gis_geocode`, formData, {
                timeout: 0
            });
            return res.data;
        });
    }
}
exports.Utils = Utils;
