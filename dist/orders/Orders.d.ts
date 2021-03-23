import { RemoteAPI } from "../RemoteAPI";
import type { Params as UseOrdersParams } from "./use_order";
export declare class Orders extends RemoteAPI {
    /**
     * All of the required Fields
     * @n Order Name
     * p.@n Supplier Name
     * p.@v Phone Number 1
     * p.@v Email
     * p.@v Volume
     * p.@v Volume
     * p.@w Weight
     * p.@c Cost
     * p.@d Description
     * p.@t Vehicle Type
     * p.@cid Custom Id
     * @tf Allowed Timeframe - Start, UNIX-time
     * @tt Allowed Timeframe - End, UNIX-time
     * @y latitude
     * @x longitude
     */
    createOrder: (params: UseOrdersParams<"create">) => Promise<[number, import("./use_order").CreateResponse]>;
    updateOrder: (params: UseOrdersParams<"update">) => Promise<number[]>;
    deleteOrder: (params: UseOrdersParams<"delete">) => Promise<[number, [number, null]]>;
    assignOrder: (params: UseOrdersParams<"assign">) => Promise<null>;
    registerOrder: (params: UseOrdersParams<"register">) => Promise<null>;
    rejectOrder: (params: UseOrdersParams<"reject">) => Promise<null>;
}
