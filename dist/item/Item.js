"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Item extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.updateCustomField = (params) => {
            return RemoteAPI_1.RemoteAPI.execute("item/update_custom_field", params, this.sessionId, this.options.host);
        };
    }
    updateProfileField(params) {
        return RemoteAPI_1.RemoteAPI.execute("item/update_profile_field", params, this.sessionId, this.options.host);
    }
}
exports.Item = Item;
