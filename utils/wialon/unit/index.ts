import { RemoteAPI } from "..";
import {
	Params as UnitGetVinInfoParams,
	Response as UnitGetVinInfoResponse
} from "./get_vin_info";

export class Unit extends RemoteAPI {
	public getVinInfo = (params: UnitGetVinInfoParams) => {
		return RemoteAPI.execute(
			"unit/get_vin_info",
			params,
			this.user.eid,
			this.host
		);
	};
}

export { UnitGetVinInfoParams, UnitGetVinInfoResponse };
