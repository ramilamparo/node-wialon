import { RemoteAPI } from "../RemoteAPI";
import type { Params as UseOrdersParams } from "./use_order";
export declare class Orders extends RemoteAPI {
    createOrder: (params: UseOrdersParams<"create">) => Promise<[number, import("./use_order").CreateResponse]>;
    updateOrder: (params: UseOrdersParams<"update">) => Promise<number[]>;
    deleteOrder: (params: UseOrdersParams<"delete">) => Promise<[number, [number, null]]>;
    assignOrder: (params: UseOrdersParams<"assign">) => Promise<null>;
    registerOrder: (params: UseOrdersParams<"register">) => Promise<null>;
    rejectOrder: (params: UseOrdersParams<"reject">) => Promise<null>;
}
