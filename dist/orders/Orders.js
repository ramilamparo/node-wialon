"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Orders extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.createOrder = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
        this.updateOrder = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
        this.deleteOrder = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
        this.assignOrder = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
        this.registerOrder = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
        this.rejectOrder = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
    }
}
exports.Orders = Orders;
