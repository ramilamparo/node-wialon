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
exports.Wialon = void 0;
const Core_1 = require("./core/Core");
const Messages_1 = require("./messages/Messages");
const Utils_1 = require("./utils/Utils");
const Unit_1 = require("./unit/Unit");
const Item_1 = require("./item/Item");
const Report_1 = require("./report/Report");
const RemoteAPI_1 = require("./RemoteAPI");
class Wialon extends RemoteAPI_1.RemoteAPI {
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
Wialon.tokenlogin = (params, host = RemoteAPI_1.defaultHost) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RemoteAPI_1.RemoteAPI.execute("token/login", params, null, host);
    const w = new Wialon(user, host);
    return w;
});
Wialon.useSession = (sessionId, host) => __awaiter(void 0, void 0, void 0, function* () {
    return new Wialon({ eid: sessionId }, host);
});
Wialon.useAuthHash = (params, host = RemoteAPI_1.defaultHost) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RemoteAPI_1.RemoteAPI.execute("core/use_auth_hash", params);
    const w = new Wialon(user, host);
    return w;
});
