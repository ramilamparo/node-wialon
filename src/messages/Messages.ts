import { RemoteAPI } from "../RemoteAPI";
import type { MessagesDataFormat } from "../format/Messages";
import type {
	Params as MessagesDeleteMessageParams,
	Response as MessagesDeleteMessageResponse
} from "./delete_message";
import type {
	Params as MessagesLoadIntervalParams,
	Response as MessagesLoadIntervalResponse
} from "./load_interval";
import type {
	Params as MessagesLoadLastParams,
	Response as MessagesLoadLastResponse
} from "./load_last";

export class Messages extends RemoteAPI {
	public loadInterval = <Response = MessagesDataFormat.MessageWithData>(
		params: MessagesLoadIntervalParams
	) => RemoteAPI.execute<
			MessagesLoadIntervalParams,
			MessagesLoadIntervalResponse<Response>
		>(
			"messages/load_interval",
			{
				itemId: params.itemId,
				timeFrom: params.timeFrom,
				timeTo: params.timeTo,
				flags: params.flags || 1,
				flagsMask: params.flagsMask || 65281,
				loadCount: params.loadCount || 4294967295
			},
			this.sessionId,
			this.options.host
		);

	public deleteMessage = (params: MessagesDeleteMessageParams) => RemoteAPI.execute<
			MessagesDeleteMessageParams,
			MessagesDeleteMessageResponse
		>("messages/delete_message", params, this.sessionId, this.options.host);

	public loadLast = <Response>(params: MessagesLoadLastParams) => RemoteAPI.execute<
			MessagesLoadLastParams,
			MessagesLoadLastResponse<Response>
		>("messages/load_last", params, this.sessionId, this.options.host);
}
