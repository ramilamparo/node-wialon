import { RemoteAPI } from "../RemoteAPI";
import type { ItemUpdateProfileFieldParams, ItemUpdateProfileFieldResponse, ItemUpdateCustomFieldParams, ItemUpdateCustomFieldCallMode, ItemUpdateCustomFieldResponse } from ".";
export declare class Item extends RemoteAPI {
    updateProfileField(params: ItemUpdateProfileFieldParams): Promise<ItemUpdateProfileFieldResponse>;
    updateCustomField: <CallMode extends ItemUpdateCustomFieldCallMode>(params: ItemUpdateCustomFieldParams<CallMode>) => Promise<ItemUpdateCustomFieldResponse<CallMode>>;
}
