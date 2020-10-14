"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Messages extends __1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.loadInterval = (params) => {
            return __1.RemoteAPI.execute("messages/load_interval", Object.assign({ itemId: params.itemId, timeFrom: params.timeFrom, timeTo: params.timeTo, flags: 1, flagsMask: 65281, loadCount: 4294967295 }, params), this.user.eid, this.host);
        };
        this.deleteMessage = (params) => {
            return __1.RemoteAPI.execute("messages/delete_message", params, this.user.eid, this.host);
        };
    }
}
exports.Messages = Messages;
