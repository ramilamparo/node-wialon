import { RemoteAPI } from "..";
import { Params as ItemUpdateProfileFieldParams, Response as ItemUpdateProfileFieldResponse } from "./update_profile_field";
export declare class Item extends RemoteAPI {
    updateProfileField(params: ItemUpdateProfileFieldParams): Promise<[number, {
        id: number;
        n: string;
        v: string;
    }]>;
}
export { ItemUpdateProfileFieldParams, ItemUpdateProfileFieldResponse };
