export interface Params {
    token: string;
    operateAs?: string;
    fl?: number;
}
export interface Response {
    eid: string;
    gis_sid: string;
    host: string;
    hw_gw_ip: string;
    au: string;
    pi: number;
    tm: number;
    wsdk_version: string;
    user: {
        nm: string;
        cls: number;
        id: number;
        prp: {
            dst: string;
            language: string;
            msakey: string;
            pcal: string;
            tz: string;
            us_units: string;
        };
        crt: number;
        bact: number;
        fl: number;
        hm: string;
        uacl: number;
        mu: number;
        ct: number;
        ftp: {
            [key: string]: any;
        };
        ld: number;
        pfl: number;
        ap: {
            type: number;
            phone: string;
        };
        mapps: {
            [key: string]: any;
        };
        mappsmax: number;
    };
}
