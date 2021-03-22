import { RemoteAPI } from "../RemoteAPI";
import type {
	Params as UnitGetVinInfoParams,
	Response as UnitGetVinInfoResponse
} from "./get_vin_info";
import type {
	Params as UnitUpdateServiceIntervalParams,
	Response as UnitUpdateServiceIntervalResponse
} from "./update_service_interval";
import type {
	Params as UnitExecCmdParams,
	Response as UnitExecCmdResponse
} from "./exec_cmd";

export class Unit extends RemoteAPI {
	public getVinInfo = (params: UnitGetVinInfoParams) => RemoteAPI.execute<UnitGetVinInfoParams, UnitGetVinInfoResponse>(
			"unit/get_vin_info",
			params,
			this.sessionId,
			this.options.host
		);

	public updateServiceInterval = (params: UnitUpdateServiceIntervalParams) => RemoteAPI.execute<
			UnitUpdateServiceIntervalParams,
			UnitUpdateServiceIntervalResponse
		>(
			"unit/update_service_interval",
			params,
			this.sessionId,
			this.options.host
		);

	public execCmd = (params: UnitExecCmdParams) => RemoteAPI.execute<UnitExecCmdParams, UnitExecCmdResponse>(
			"unit/exec_cmd",
			params,
			this.sessionId,
			this.options.host
		);
}
