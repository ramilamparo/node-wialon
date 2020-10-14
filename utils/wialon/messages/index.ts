import { RemoteAPI } from "..";
import { MessageWithData } from "../format/Messages";
import {
	Params as MessagesDeleteMessageParams,
	Response as MessagesDeleteMessageResponse
} from "./delete_message";
import { Params as MessagesLoadIntervalParams } from "./load_interval";

export class Messages extends RemoteAPI {
	public loadInterval = <Response = MessageWithData>(
		params: MessagesLoadIntervalParams
	) => {
		return RemoteAPI.execute<MessagesLoadIntervalParams, Response>(
			"messages/load_interval",
			{
				itemId: params.itemId,
				timeFrom: params.timeFrom,
				timeTo: params.timeTo,
				flags: params.flags || 1,
				flagsMask: params.flagsMask || 65281,
				loadCount: params.loadCount || 4294967295
			},
			this.user.eid,
			this.host
		);
	};
	public deleteMessage = (params: MessagesDeleteMessageParams) => {
		return RemoteAPI.execute<
			MessagesDeleteMessageParams,
			MessagesDeleteMessageResponse
		>("messages/delete_message", params, this.user.eid, this.host);
	};
}

export {
	MessagesDeleteMessageParams,
	MessagesDeleteMessageResponse,
	MessagesLoadIntervalParams
};
