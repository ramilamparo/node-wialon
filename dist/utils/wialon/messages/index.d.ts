import { PartialExcept, RemoteAPI } from "..";
import { Params as MessagesDeleteMessageParams, Response as MessagesDeleteMessageResponse } from "./delete_message";
import { Params as MessagesLoadIntervalParams, Response as MessagesLoadIntervalResponse } from "./load_interval";
export declare class Messages extends RemoteAPI {
    loadInterval: (params: PartialExcept<MessagesLoadIntervalParams, "itemId" | "timeFrom" | "timeTo">) => Promise<MessagesLoadIntervalResponse>;
    deleteMessage: (params: MessagesDeleteMessageParams) => Promise<import("..").RemoteAPIError>;
}
export { MessagesDeleteMessageParams, MessagesDeleteMessageResponse, MessagesLoadIntervalParams, MessagesLoadIntervalResponse };
