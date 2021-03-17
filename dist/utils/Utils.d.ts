import { RemoteAPI } from "../RemoteAPI";
import { UnitsDataFormat } from "../format/Units";
export interface UtilsGetAddressCoords {
    lat: number;
    lon: number;
}
export interface UtilsGetAddressParams {
    /** array with coordinates */
    coords: UtilsGetAddressCoords[];
    /** minimal city radius, km (optional). Minimal city radius says that if no city has been found within maximum distance from unit (the previous option), then the address is bound to another city. How big this city should be to form the address, you indicate here – minimum radius of a city. This can be used to eliminate small cities from addresses. */
    city_radius?: number;
    /** maximal distance from unit, km (optional). Maximal distance from unit says that if unit is located near a road and there is a city (i.e. city, town, village) within the indicated distance, then in the address you will have the road's name and distance to the city. */
    dist_from_unit?: number;
    /**  metrics of maximal distance from unit (optional) */
    txt_dist?: number;
    /** flags of output format (see below) */
    flags: number;
    /** current user ID  */
    uid: number;
}
export declare type UtilsGetAddressResponse = string[];
export declare class Utils extends RemoteAPI {
    getUnits: <Response_1 = UnitsDataFormat.GeneralProperties>({ flags }: {
        flags?: number | undefined;
    }) => Promise<import("../core").CoreSearchItemsResponse<Response_1>>;
    getAddress: (params: UtilsGetAddressParams) => Promise<UtilsGetAddressResponse>;
}
