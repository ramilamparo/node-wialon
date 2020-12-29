import { RemoteAPI } from "../RemoteAPI";
import { UnitsDataFormat } from "../format/Units";
export declare class Utils extends RemoteAPI {
    getUnits: <Response_1 = UnitsDataFormat.GeneralProperties>({ flags }: {
        flags?: number | undefined;
    }) => Promise<import("../core").CoreSearchItemsResponse<Response_1>>;
    getAddress: ({ lat, lng }: {
        lat: number;
        lng: number;
    }, flags?: number) => Promise<any>;
}
