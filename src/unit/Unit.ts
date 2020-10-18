import { RemoteAPI } from "../RemoteAPI";
import type {
	Params as UnitGetVinInfoParams,
	Response as UnitGetVinInfoResponse
} from "./get_vin_info";
import type {
	Params as UnitUpdateServiceIntervalParams,
	Response as UnitUpdateServiceIntervalResponse
} from "./update_service_interval";

export class Unit extends RemoteAPI {
	public getVinInfo = (params: UnitGetVinInfoParams) => {
		return RemoteAPI.execute<UnitGetVinInfoParams, UnitGetVinInfoResponse>(
			"unit/get_vin_info",
			params,
			this.sessionId,
			this.host
		);
	};

	public updateServiceInterval = (params: UnitUpdateServiceIntervalParams) => {
		return RemoteAPI.execute<UnitUpdateServiceIntervalParams, UnitUpdateServiceIntervalResponse>(
			"unit/update_service_interval",
			params,
			this.sessionId,
			this.host
		);
	};
}
