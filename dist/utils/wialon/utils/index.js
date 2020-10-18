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
const __1 = require("..");
class Utils extends __1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.getUnits = ({ flags = 1 }) => {
            return __1.RemoteAPI.execute("core/search_items", {
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
            }, this.sessionId, this.host);
        };
        this.getAddress = ({ lat, lng }, flags = 54321) => __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append("uid", String(this.user.user.id));
            formData.append("sid", this.sessionId);
            formData.append("flags", String(flags));
            formData.append("coords", JSON.stringify([{ lat, lng }]));
            const res = yield axios_1.default.post(`https://geocode-maps.wialon.com/${this.host.replace("https://", "")}/gis_geocode`, formData, {
                timeout: 0
            });
            return res.data;
        });
    }
}
exports.Utils = Utils;
