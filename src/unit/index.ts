import { RemoteAPI } from "..";
import {
	Params as UnitGetVinInfoParams,
	Response as UnitGetVinInfoResponse
} from "./get_vin_info";
import {
	Params as UnitUpdateServiceIntervalParams,
	Response as UnitUpdateServiceIntervalResponse
} from "./update_service_interval";

export class Unit extends RemoteAPI {
	public getVinInfo = (params: UnitGetVinInfoParams) => {
		return RemoteAPI.execute(
			"unit/get_vin_info",
			params,
			this.user.eid,
			this.host
		);
	};

	public updateServiceInterval = (params: UnitUpdateServiceIntervalParams) => {
		return RemoteAPI.execute(
			"unit/update_service_interval",
			params,
			this.user.eid,
			this.host
		);
	};
}

export {
	UnitGetVinInfoParams,
	UnitGetVinInfoResponse,
	UnitUpdateServiceIntervalParams,
	UnitUpdateServiceIntervalResponse
};
