import { RemoteAPI } from "../RemoteAPI";
import type { Params as UnitGetVinInfoParams } from "./get_vin_info";
import type { Params as UnitUpdateServiceIntervalParams } from "./update_service_interval";
export declare class Unit extends RemoteAPI {
    getVinInfo: (params: UnitGetVinInfoParams) => Promise<any>;
    updateServiceInterval: (params: UnitUpdateServiceIntervalParams) => Promise<any>;
}
