"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Orders extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        /**
         * All of the required Fields for Create
         * @n Order Name
         * @pn Supplier Name
         * @pv Phone Number 1
         * @pv Email
         * @pv Volume
         * @pv Volume
         * @pw Weight
         * @pc Cost
         * @pd Description
         * @pt Vehicle Type
         * @pcid Custom Id
         * @tf Allowed Timeframe - Start, UNIX-time
         * @tt Allowed Timeframe - End, UNIX-time
         * @y latitude
         * @x longitude
         */
        this.update = (params) => RemoteAPI_1.RemoteAPI.execute("order/update", params, this.sessionId, this.options.host);
    }
}
exports.Orders = Orders;
