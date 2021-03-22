"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Messages extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.loadInterval = (params) => RemoteAPI_1.RemoteAPI.execute("messages/load_interval", {
            itemId: params.itemId,
            timeFrom: params.timeFrom,
            timeTo: params.timeTo,
            flags: params.flags || 1,
            flagsMask: params.flagsMask || 65281,
            loadCount: params.loadCount || 4294967295
        }, this.sessionId, this.options.host);
        this.deleteMessage = (params) => RemoteAPI_1.RemoteAPI.execute("messages/delete_message", params, this.sessionId, this.options.host);
        this.loadLast = (params) => RemoteAPI_1.RemoteAPI.execute("messages/load_last", params, this.sessionId, this.options.host);
    }
}
exports.Messages = Messages;
