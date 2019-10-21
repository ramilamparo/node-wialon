import { Wialon } from "..";
import {
	Params as UnitGetVinInfoParams,
	Response as UnitGetVinInfoResponse
} from "./get_vin_info";

export class Unit extends Wialon {
	public getVinInfo = (params: UnitGetVinInfoParams) => {
		return Wialon.execute(
			"unit/get_vin_info",
			params,
			this.user.eid,
			this.host
		);
	};
}

export { UnitGetVinInfoParams, UnitGetVinInfoResponse };
