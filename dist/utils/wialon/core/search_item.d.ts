import { MessagesLoadIntervalResponse } from "../";
export interface Params {
    id: number;
    flags: number;
}
export interface Response {
    flags: number;
    item: Partial<{
        id: number;
        nm: string;
        uid: string;
        uid2: string;
        hw: number;
        ph: string;
        ph2: string;
        psw: string;
        pflds: {
            [key: string]: {
                id: number;
                n: string;
                v: string;
            };
        };
        zl: Partial<{
            [key: string]: Partial<{
                n: string;
                d: string;
                id: number;
                f: number;
                t: number;
                e: number;
                b: {
                    min_x: number;
                    min_y: number;
                    max_x: number;
                    max_y: number;
                    cen_x: number;
                    cen_y: number;
                };
            }>;
        }>;
        pos: {
            t: number;
            y: number;
            x: number;
            z: number;
            s: number;
            c: number;
            sc: number;
        };
        lmsg: MessagesLoadIntervalResponse;
        drvrs: Partial<{
            [key: string]: Partial<{
                id: number;
                n: string;
                c: string;
                pwd: string;
                ej: string;
                jp: {
                    [key: string]: string;
                };
                ds: string;
                p: string;
                r: number;
                ck: string;
                bu: number;
                pu: number;
                bt: number;
                pos: {
                    y: number;
                    x: number;
                };
                infr: {
                    a: number;
                    t: number;
                    ud: number;
                    ur: number;
                    uil: number;
                    uim: number;
                    uis: number;
                    uir: number;
                    ddt: number;
                    ddc: number;
                    ddil: number;
                    ddim: number;
                    ddis: number;
                    wdt: number;
                    wdil: number;
                    wdim: number;
                    wdis: number;
                    twdt: number;
                    twdil: number;
                    twdim: number;
                    twdis: number;
                    drt: number;
                    drd: number;
                    dril: number;
                    drim: number;
                    dris: number;
                    wrt: number;
                    wrd: number;
                    wril: number;
                    wrim: number;
                    wris: number;
                };
            }>;
        }>;
        cfl: number;
        cnm: number;
        cneh: number;
        cnkb: number;
        drvrsmax: number;
    }>;
}
