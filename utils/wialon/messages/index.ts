import { Params, PartialExcept, RemoteAPI } from "..";
import {
	Params as MessagesDeleteMessageParams,
	Response as MessagesDeleteMessageResponse
} from "./delete_message";
import {
	Params as MessagesLoadIntervalParams,
	Response as MessagesLoadIntervalResponse
} from "./load_interval";

export class Messages extends RemoteAPI {
	public loadInterval = (
		params: PartialExcept<
			Params["messages/load_interval"],
			"itemId" | "timeFrom" | "timeTo"
		>
	) => {
		return RemoteAPI.execute<"messages/load_interval">(
			"messages/load_interval",
			{
				itemId: params.itemId,
				timeFrom: params.timeFrom,
				timeTo: params.timeTo,
				flags: 1,
				flagsMask: 65281,
				loadCount: 4294967295,
				...params
			},
			this.user.eid,
			this.host
		);
	};
	public deleteMessage = (params: Params["messages/delete_message"]) => {
		return RemoteAPI.execute(
			"messages/delete_message",
			params,
			this.user.eid,
			this.host
		);
	};
}

export {
	MessagesDeleteMessageParams,
	MessagesDeleteMessageResponse,
	MessagesLoadIntervalParams,
	MessagesLoadIntervalResponse
};
