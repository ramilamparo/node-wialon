import { RemoteAPI } from "../RemoteAPI";
import type {
	ResourceUpdateDriverCallMode,
	ResourceUpdateDriverParams,
	ResourceUpdateDriverResponse
} from ".";

export class Resource extends RemoteAPI {
	public updateDriver = <CallMode extends ResourceUpdateDriverCallMode>(
		params: ResourceUpdateDriverParams<CallMode>
	): Promise<ResourceUpdateDriverResponse<CallMode>> => {
		return RemoteAPI.execute<
			ResourceUpdateDriverParams<CallMode>,
			ResourceUpdateDriverResponse<CallMode>
		>("resource/update_driver", params, this.sessionId, this.options.host);
	};
}
