import { RemoteAPI } from "../RemoteAPI";
import type {
	Params as UseOrdersParams,
	Response as UseOrdersResponse
} from "./use_order";

export class Orders extends RemoteAPI {
	/**
	 * All of the required Fields
	 * @n Order Name
	 * p.@n Supplier Name
	 * p.@v Phone Number 1
	 * p.@v Email
	 * p.@v Volume
	 * p.@v Volume
	 * p.@w Weight
	 * p.@c Cost
	 * p.@d Description
	 * p.@t Vehicle Type
	 * p.@cid Custom Id
	 * @tf Allowed Timeframe - Start, UNIX-time
	 * @tt Allowed Timeframe - End, UNIX-time
	 * @y latitude
	 * @x longitude
	 */
	public createOrder = (params: UseOrdersParams<"create">) =>
		RemoteAPI.execute<UseOrdersParams<"create">, UseOrdersResponse<"create">>(
			"order/update",
			params,
			this.sessionId,
			this.options.host
		);

	public updateOrder = (params: UseOrdersParams<"update">) =>
		RemoteAPI.execute<UseOrdersParams<"update">, UseOrdersResponse<"update">>(
			"order/update",
			params,
			this.sessionId,
			this.options.host
		);

	public deleteOrder = (params: UseOrdersParams<"delete">) =>
		RemoteAPI.execute<UseOrdersParams<"delete">, UseOrdersResponse<"delete">>(
			"order/update",
			params,
			this.sessionId,
			this.options.host
		);

	public assignOrder = (params: UseOrdersParams<"assign">) =>
		RemoteAPI.execute<UseOrdersParams<"assign">, UseOrdersResponse<"assign">>(
			"order/update",
			params,
			this.sessionId,
			this.options.host
		);

	public registerOrder = (params: UseOrdersParams<"register">) =>
		RemoteAPI.execute<
			UseOrdersParams<"register">,
			UseOrdersResponse<"register">
		>("order/update", params, this.sessionId, this.options.host);

	public rejectOrder = (params: UseOrdersParams<"reject">) =>
		RemoteAPI.execute<UseOrdersParams<"reject">, UseOrdersResponse<"reject">>(
			"order/update",
			params,
			this.sessionId,
			this.options.host
		);
}
