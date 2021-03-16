"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Resource extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.updateDriver = (params) => {
            return RemoteAPI_1.RemoteAPI.execute("resource/update_driver", params, this.sessionId, this.options.host);
        };
    }
}
exports.Resource = Resource;
