export interface Params {
    token: string;
    operateAs?: string;
    fl?: number;
}
export interface Response {
    /** session ID */
    eid: string;
    /** session ID for gis services */
    gis_sid: string;
    /** host */
    host: string;
    /** hardware gateway ip */
    hw_gw_ip: string;
    /** user name */
    au: string;
    /** ping interval */
    pi: number;
    /** current time (UTC) */
    tm: number;
    /** sdk version */
    wsdk_version: string;
    /** user from whose behalf you want to perform login */
    user: {
        /** name  */
        nm: string;
        /** ID of superclass user */
        cls: number;
        /** ID */
        id: number;
        /** custom properties, for example: */
        prp: {
            /** daylight savings time */
            dst: string;
            /** language (two-lettered code) */
            language: string;
            /** access key to mobile site */
            msakey: string;
            /** Iranian calendar */
            pcal: string;
            /** time zone */
            tz: string;
            /** US metrics (miles and gallons) */
            us_units: string;
        };
        /** creator ID */
        crt: number;
        /** account ID */
        bact: number;
        /** user flags */
        fl: number;
        /** host mask */
        hm: string;
        /** user access to himself */
        uacl: number;
        /** Measurement system */
        mu: number;
        /** User creation date */
        ct: number;
        /** FTP settings */
        ftp: {
            [key: string]: any;
        };
        /** Last login date */
        ld: number;
        /** Creators flag */
        pfl: number;
        /** Two-factor authentication settings */
        ap: {
            /** authentication type ( 0 - none, 1 - email, 2 - SMS ) */
            type: number;
            /** Phone number */
            phone: string;
        };
        /** Mobile apps list */
        mapps: {
            [key: string]: any;
        };
        /** Restrictions on mobile applications specified in the billing plan */
        mappsmax: number;
    };
}
