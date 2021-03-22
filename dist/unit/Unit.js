"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Unit extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.getVinInfo = (params) => RemoteAPI_1.RemoteAPI.execute("unit/get_vin_info", params, this.sessionId, this.options.host);
        this.updateServiceInterval = (params) => RemoteAPI_1.RemoteAPI.execute("unit/update_service_interval", params, this.sessionId, this.options.host);
        this.execCmd = (params) => RemoteAPI_1.RemoteAPI.execute("unit/exec_cmd", params, this.sessionId, this.options.host);
    }
}
exports.Unit = Unit;
