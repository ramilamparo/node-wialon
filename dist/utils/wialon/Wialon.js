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
const _1 = require("./");
class Wialon extends _1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.execute = (svc, params) => __awaiter(this, void 0, void 0, function* () {
            return _1.RemoteAPI.execute(svc, params, this.sessionId, this.host);
        });
    }
    get Unit() {
        return new _1.Unit(this.user, this.host);
    }
    get Core() {
        return new _1.Core(this.user, this.host);
    }
    get Messages() {
        return new _1.Messages(this.user, this.host);
    }
    get Utils() {
        return new _1.Utils(this.user, this.host);
    }
    get Item() {
        return new _1.Item(this.user, this.host);
    }
}
exports.Wialon = Wialon;
Wialon.login = (params, host = _1.defaultHost) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _1.RemoteAPI.execute("token/login", params, null, host);
    const w = new Wialon(user, host);
    return w;
});
