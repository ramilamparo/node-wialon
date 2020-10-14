import { RemoteAPI } from "..";
import { Params as CoreBatchParams, Response as CoreBatchResponse } from "./batch";
import { Params as CoreSearchItemsParams, Response as CoreSearchItemsResponse } from "./search_items";
import { Params as CoreSearchItemParams, Response as CoreSearchItemResponse } from "./search_item";
export declare class Core extends RemoteAPI {
    searchItems: (params: CoreSearchItemsParams) => Promise<CoreSearchItemsResponse>;
    searchItem: (params: CoreSearchItemParams) => Promise<CoreSearchItemResponse>;
    batch: <T extends string | number>(params: CoreBatchParams<T>) => Promise<(import("..").Response[T] & import("..").RemoteAPIError)[]>;
}
export { CoreBatchParams, CoreBatchResponse, CoreSearchItemsParams, CoreSearchItemsResponse, CoreSearchItemParams, CoreSearchItemResponse };
