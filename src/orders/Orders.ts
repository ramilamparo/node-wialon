import { RemoteAPI } from "../RemoteAPI";
import type {
	Params as UseOrdersParams,
	Response as UseOrdersResponse,
	CallMode
} from "./use_order";

export class Orders extends RemoteAPI {
	/**
	 * All of the required Fields for Create
	 * @n Order Name
	 * @pn Supplier Name
	 * @pv Phone Number 1
	 * @pv Email
	 * @pv Volume
	 * @pv Volume
	 * @pw Weight
	 * @pc Cost
	 * @pd Description
	 * @pt Vehicle Type
	 * @pcid Custom Id
	 * @tf Allowed Timeframe - Start, UNIX-time
	 * @tt Allowed Timeframe - End, UNIX-time
	 * @y latitude
	 * @x longitude
	 */
	public update = <CallModeType extends CallMode>(params: UseOrdersParams<CallModeType>) =>
		RemoteAPI.execute<UseOrdersParams<CallModeType>, UseOrdersResponse<CallModeType>>(
			"order/update",
			params,
			this.sessionId,
			this.options.host
		);
}
