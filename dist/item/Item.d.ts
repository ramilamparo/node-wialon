import { RemoteAPI } from "../RemoteAPI";
import type { Params as ItemUpdateProfileFieldParams, Response as ItemUpdateProfileFieldResponse } from "./update_profile_field";
export declare class Item extends RemoteAPI {
    updateProfileField(params: ItemUpdateProfileFieldParams): Promise<ItemUpdateProfileFieldResponse>;
}
