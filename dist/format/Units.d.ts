export interface GeneralProperties {
    mu: number;
    nm: string;
    cls: number;
    id: number;
    uacl: number;
}
export interface CustomProperties {
    prp: {
        img_rot: string;
        monitoring_sensor_id: string;
        motion_state_sensor_id: string;
        sensors_colors_id: string;
        use_sensor_color: string;
        sensors_colors: string;
        solid_colors: string;
        speed_colors: string;
        track_sensor: string;
        track_solid: string;
        track_speed: string;
        monitoring_battery_id: string;
        [key: string]: string;
    };
    ct: number;
}
export interface Billing {
    crt: number;
    bact: number;
}
export interface CustomFields {
    flds: {
        [key: string]: {
            id: number;
            n: string;
            v: string;
        };
    };
    fldsmax: number;
}
export interface UnitImage {
    uri: string;
    ugi: number;
}
export interface Message {
}
export interface GUID {
    gd: string;
}
export interface AdministrativeFields {
    aflds: {
        [key: string]: {
            id: number;
            n: string;
            v: string;
        };
    };
    afldsmax: number;
}
export interface AdvancedProperties {
    uid: string;
    uid2: string;
    hw: number;
    ph: string;
    ph2: string;
    psw: string;
    act: boolean;
    dactt: number;
}
export interface AvailableCommands {
    cmds: [{
        n: string;
        a: number;
        t: string;
        c: string;
    }];
}
export interface LastMessagePosition {
    pos: {
        t: number;
        y: number;
        x: number;
        z: number;
        s: number;
        c: number;
        sc: number;
    };
    lmsg: {};
}
export interface Sensors {
    sens: {
        [key: string]: {
            id: number;
            n: string;
            t: string;
            d: string;
            m: string;
            p: string;
            f: number;
            c: string;
            vt: number;
            vs: number;
            tbl: [{
                x: number;
                a: number;
                b: number;
            }];
        };
    };
    sens_max: number;
}
export interface Counters {
    cfl: number;
    cnm: number;
    cneh: number;
    cnkb: number;
}
export interface Maintenance {
    si: {
        [key: string]: {
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
        };
    };
    simax: number;
}
export interface TripDetectorAndFuelConsumption {
    rtd: {
        type: number;
        gpsCorrection: number;
        minSat: number;
        minMovingSpeed: number;
        minStayTime: number;
        maxMessagesDistance: number;
        minTripTime: number;
        minTripDistance: number;
    };
    rfc: {
        calcTypes: number;
        fuelLevelParams: {
            flags: number;
            ignoreStayTimeout: number;
            minFillingVolume: number;
            minTheftTimeout: number;
            minTheftVolume: number;
            filterQuality: number;
            fillingsJoinInterval: number;
            theftsJoinInterval: number;
            extraFillingTimeout: number;
        };
        fuelConsMath: {
            idling: number;
            urban: number;
            suburban: number;
        };
        fuelConsRates: {
            consSummer: number;
            consWinter: number;
            winterMonthFrom: number;
            winterDayFrom: number;
            winterMonthTo: number;
            winterDayTo: number;
        };
        fuelConsImpulse: {
            maxImpulses: number;
            skipZero: number;
        };
    };
}
export interface Commands {
    cml: {
        [key: string]: {
            id: number;
            n: string;
            c: string;
            l: string;
            p: string;
            a: number;
            f: number;
        };
    };
    cml_max: number;
}
export interface MessageParameters {
    prms: {
        [key: string]: {
            v: any;
            ct: number;
            at: number;
        };
    };
}
export interface Connection {
    item: {
        netconn: boolean;
    };
}
export interface Position {
    pos: {
        t: number;
        y: number;
        x: number;
        z: number;
        s: number;
        c: number;
        sc: number;
    };
}
export interface ProfileFields {
    pflds: {
        number: {
            id: number;
            n: string;
            v: string;
        };
    };
}
