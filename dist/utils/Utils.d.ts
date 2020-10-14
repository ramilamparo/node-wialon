import { RemoteAPI } from "../RemoteAPI";
export declare class Utils extends RemoteAPI {
    getUnits: ({ flags }: {
        flags?: number | undefined;
    }) => Promise<any>;
    getAddress: ({ lat, lng }: {
        lat: number;
        lng: number;
    }, flags?: number) => Promise<any>;
}
