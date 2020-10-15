import { RemoteAPI } from "../RemoteAPI";
import type { Params as UnitGetVinInfoParams, Response as UnitGetVinInfoResponse } from "./get_vin_info";
import type { Params as UnitUpdateServiceIntervalParams, Response as UnitUpdateServiceIntervalResponse } from "./update_service_interval";
export declare class Unit extends RemoteAPI {
    getVinInfo: (params: UnitGetVinInfoParams) => Promise<UnitGetVinInfoResponse>;
    updateServiceInterval: (params: UnitUpdateServiceIntervalParams) => Promise<UnitUpdateServiceIntervalResponse>;
}
