import { RemoteAPIError } from "..";
export interface Params {
    itemId: number;
    timeFrom: number;
    timeTo: number;
    flags: number;
    flagsMask: number;
    loadCount: number;
}
export interface Response extends RemoteAPIError {
    t: number;
    f: number;
    tp: "ud";
    pos: {
        y: number;
        x: number;
        z: number;
        s: number;
        c: number;
        sc: number;
    };
    i: number;
    o: number;
    p: {
        [key: string]: number;
    };
}
