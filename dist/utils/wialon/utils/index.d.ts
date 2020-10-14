import { RemoteAPI } from "..";
export declare class Utils extends RemoteAPI {
    getUnits: ({ flags }: {
        flags?: number | undefined;
    }) => Promise<import("..").CoreSearchItemsResponse>;
    getAddress: ({ lat, lng }: {
        lat: number;
        lng: number;
    }, flags?: number) => Promise<any>;
}
