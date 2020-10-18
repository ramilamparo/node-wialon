import { RemoteAPI } from "../RemoteAPI";
import type { MessagesDataFormat } from "../format/Messages";
import type { Params as MessagesDeleteMessageParams, Response as MessagesDeleteMessageResponse } from "./delete_message";
import type { Params as MessagesLoadIntervalParams } from "./load_interval";
export declare class Messages extends RemoteAPI {
    loadInterval: <Response_1 = MessagesDataFormat.MessageWithData>(params: MessagesLoadIntervalParams) => Promise<Response_1>;
    deleteMessage: (params: MessagesDeleteMessageParams) => Promise<MessagesDeleteMessageResponse>;
}
