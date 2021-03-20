import { RemoteAPI } from "../RemoteAPI";
import type { ItemUpdateProfileFieldParams, ItemUpdateProfileFieldResponse, UpdateCustomFieldParams, UpdateCustomFieldCallMode, UpdateCustomFieldResponse } from ".";
export declare class Item extends RemoteAPI {
    updateProfileField(params: ItemUpdateProfileFieldParams): Promise<ItemUpdateProfileFieldResponse>;
    updateCustomField: <CallMode extends UpdateCustomFieldCallMode>(params: UpdateCustomFieldParams<CallMode>) => Promise<UpdateCustomFieldResponse<CallMode>>;
}
