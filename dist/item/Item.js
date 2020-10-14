"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Item extends RemoteAPI_1.RemoteAPI {
    updateProfileField(params) {
        return RemoteAPI_1.RemoteAPI.execute("item/update_profile_field", params, this.user.eid, this.host);
    }
}
exports.Item = Item;
