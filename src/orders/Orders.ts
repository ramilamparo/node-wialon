import { RemoteAPI } from "../RemoteAPI";
import type {
	Params as UseOrdersParams,
	Response as UseOrdersResponse
} from "./use_order";

export class Orders extends RemoteAPI {
	public createOrder = (params: UseOrdersParams<"create">) => RemoteAPI.execute<
		UseOrdersParams<"create">,
		UseOrdersResponse<"create">
	>("order/update", params, this.sessionId, this.options.host);

	public updateOrder = (params: UseOrdersParams<"update">) => RemoteAPI.execute<
		UseOrdersParams<"update">,
		UseOrdersResponse<"update">
	>("order/update", params, this.sessionId, this.options.host);

	public deleteOrder = (params: UseOrdersParams<"delete">) => RemoteAPI.execute<
		UseOrdersParams<"delete">,
		UseOrdersResponse<"delete">
	>("order/update", params, this.sessionId, this.options.host);

	public assignOrder = (params: UseOrdersParams<"assign">) => RemoteAPI.execute<
		UseOrdersParams<"assign">,
		UseOrdersResponse<"assign">
	>("order/update", params, this.sessionId, this.options.host);

	public registerOrder = (params: UseOrdersParams<"register">) => RemoteAPI.execute<
		UseOrdersParams<"register">,
		UseOrdersResponse<"register">
	>("order/update", params, this.sessionId, this.options.host);

	public rejectOrder = (params: UseOrdersParams<"reject">) => RemoteAPI.execute<
		UseOrdersParams<"reject">,
		UseOrdersResponse<"reject">
	>("order/update", params, this.sessionId, this.options.host);
}
