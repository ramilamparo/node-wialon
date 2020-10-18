"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Unit extends __1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.getVinInfo = (params) => {
            return __1.RemoteAPI.execute("unit/get_vin_info", params, this.sessionId, this.host);
        };
        this.updateServiceInterval = (params) => {
            return __1.RemoteAPI.execute("unit/update_service_interval", params, this.sessionId, this.host);
        };
    }
}
exports.Unit = Unit;
