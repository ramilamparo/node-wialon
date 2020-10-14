import { RemoteAPI } from "..";
import { Params as UnitGetVinInfoParams, Response as UnitGetVinInfoResponse } from "./get_vin_info";
import { Params as UnitUpdateServiceIntervalParams, Response as UnitUpdateServiceIntervalResponse } from "./update_service_interval";
export declare class Unit extends RemoteAPI {
    getVinInfo: (params: UnitGetVinInfoParams) => Promise<UnitGetVinInfoResponse>;
    updateServiceInterval: (params: UnitUpdateServiceIntervalParams) => Promise<[number, {
        id: number;
        n: string;
        t: string;
        im: number;
        it: number;
        ie: number;
        pm: number;
        pt: number;
        pe: number;
        c: number;
    } | null]>;
}
export { UnitGetVinInfoParams, UnitGetVinInfoResponse, UnitUpdateServiceIntervalParams, UnitUpdateServiceIntervalResponse };
