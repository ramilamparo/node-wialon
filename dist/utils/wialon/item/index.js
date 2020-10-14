"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Item extends __1.RemoteAPI {
    updateProfileField(params) {
        return __1.RemoteAPI.execute("item/update_profile_field", params, this.user.eid, this.host);
    }
}
exports.Item = Item;
