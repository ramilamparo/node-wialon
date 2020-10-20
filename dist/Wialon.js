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
exports.Wialon = void 0;
const axios_1 = __importDefault(require("axios"));
const Core_1 = require("./core/Core");
const Messages_1 = require("./messages/Messages");
const Utils_1 = require("./utils/Utils");
const Unit_1 = require("./unit/Unit");
const Item_1 = require("./item/Item");
const Report_1 = require("./report/Report");
const RemoteAPI_1 = require("./RemoteAPI");
class Wialon extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.duplicateSession = (params) => __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign({ operateAs: "" }, params);
            const response = yield RemoteAPI_1.RemoteAPI.execute("core/duplicate", combinedParams, this.sessionId);
            return new Wialon(response, params === null || params === void 0 ? void 0 : params.host);
        });
        this.avlEvts = () => __awaiter(this, void 0, void 0, function* () {
            const baseURL = new URL(this.host);
            return axios_1.default.post(`${baseURL.protocol}//${baseURL.host}/avl_evts?sid=${this.auth.eid}`);
        });
    }
    get Unit() {
        return new Unit_1.Unit(this.auth, this.host);
    }
    get Core() {
        return new Core_1.Core(this.auth, this.host);
    }
    get Messages() {
        return new Messages_1.Messages(this.auth, this.host);
    }
    get Utils() {
        return new Utils_1.Utils(this.auth, this.host);
    }
    get Item() {
        return new Item_1.Item(this.auth, this.host);
    }
    get Report() {
        return new Report_1.Report(this.auth, this.host);
    }
}
exports.Wialon = Wialon;
Wialon.tokenlogin = (params, host) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RemoteAPI_1.RemoteAPI.execute("token/login", params, null, host);
    const w = new Wialon(user, host);
    return w;
});
Wialon.useSession = (sessionId, host) => {
    return new Wialon({ eid: sessionId }, host);
};
Wialon.useAuthHash = (params, host) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RemoteAPI_1.RemoteAPI.execute("core/use_auth_hash", params);
    const w = new Wialon(user, host);
    return w;
});
