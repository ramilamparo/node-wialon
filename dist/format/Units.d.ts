export declare namespace UnitsDataFormat {
    interface GeneralProperties {
        /** measure units: 0 - si, 1 - us, 2 - imperial, 3 - metric with gallons */
        mu: number;
        /** name */
        nm: string;
        /** superclass ID: "avl_unit" */
        cls: number;
        /** unit ID */
        id: number;
        /** current user access level for unit */
        uacl: number;
    }
    interface CustomProperties {
        prp: {
            /** rotate images: "1" - yes, "0" - no */
            img_rot: string;
            /** sensor ID which will be shown in monitoring panel */
            monitoring_sensor_id: string;
            /** sensor - source of motion state ID */
            motion_state_sensor_id: string;
            /** sensor - source of track colour */
            sensors_colors_id: string;
            /** use sensor color in monitoring panel: "1" - yes, "0" - no */
            use_sensor_color: string;
            /** used one of parameters to choose source of color for track */
            /** table of colors for track by sensor */
            sensors_colors: string;
            /** color for track */
            solid_colors: string;
            /** table of colors for track by speed */
            speed_colors: string;
            /** used for storage last used colors */
            /** table of colors for track by sensor */
            track_sensor: string;
            /** color for track */
            track_solid: string;
            /** table of colors for track by speed */
            track_speed: string;
            /** sensor ID which shows battery status */
            monitoring_battery_id: string;
            [key: string]: string;
        };
        /** creation time */
        ct: number;
    }
    interface Billing {
        /** creator ID */
        crt: number;
        /** account ID */
        bact: number;
    }
    interface CustomFields {
        flds: {
            /** custom fields */
            [key: string]: {
                /** sequence number */
                /** ID */
                id: number;
                /** name */
                n: string;
                /** value */
                v: string;
            };
        };
        /** maximal count of custom fields (-1 - unlimited) */
        fldsmax: number;
    }
    interface UnitImage {
        /** image link */
        uri: string;
        /** image changes counter */
        ugi: number;
    }
    interface Message {
    }
    interface GUID {
        /** unit GUID */
        gd: string;
    }
    interface AdministrativeFields {
        /** administrative fields */
        aflds: {
            /** sequence number */
            [key: string]: {
                /** ID */
                id: number;
                /** name */
                n: string;
                /** value */
                v: string;
            };
        };
        /** maximal count of administrative fields (-1 - unlimited) */
        afldsmax: number;
    }
    interface AdvancedProperties {
        /** unique ID (hardware) */
        uid: string;
        /** second unique ID (hardware) */
        uid2: string;
        /** hardware type */
        hw: number;
        /** phone number */
        ph: string;
        /** second phone number */
        ph2: string;
        /** password */
        psw: string;
        /** unit deactivated - 0, activated - 1 */
        act: boolean;
        /** deactivation time UNIX, 0 - unit is activated */
        dactt: number;
    }
    interface AvailableCommands {
        /** array of commands */
        cmds: [{
            /** name */
            n: string;
            /** access level (access rights that user must have to execute current command) */
            a: number;
            /** link type */
            t: string;
            /** command type */
            c: string;
        }];
    }
    interface LastMessagePosition {
        pos: {
            /** last known position */
            /** time (UTC) */
            t: number;
            /** latitude */
            y: number;
            /** longitude */
            x: number;
            /** altitude */
            z: number;
            /** speed */
            s: number;
            /** course */
            c: number;
            /** satellites count */
            sc: number;
        };
        lmsg: {};
    }
    interface Sensors {
        sens: {
            /** sensors */
            [key: string]: {
                /** sequence number of sensor */
                /** ID */
                id: number;
                /** name */
                n: string;
                /** type */
                t: string;
                /** description */
                d: string;
                /** metrics */
                m: string;
                /** parameter */
                p: string;
                /** sensor flags */
                f: number;
                /** configuration */
                c: string;
                /** validation type */
                vt: number;
                /** validation sensor ID */
                vs: number;
                tbl: [
                /** calculation table */
                {
                    /** parameters */
                    x: number;
                    a: number;
                    b: number;
                }];
            };
        };
        /**  maximal count of sensors (-1 - unlimited) */
        sens_max: number;
    }
    interface Counters {
        /** calculation flags */
        cfl: number;
        /** mileage counter, km or miles */
        cnm: number;
        /** engine hours counter, h */
        cneh: number;
        /** GPRS traffic counter, KB */
        cnkb: number;
    }
    interface Maintenance {
        /** service intervals */
        si: {
            /** sequence number of service interval */
            [key: string]: {
                /** ID */
                id: number;
                /** name */
                n: string;
                /** description */
                t: string;
                /** mileage interval */
                im: number;
                /** days interval */
                it: number;
                /** engine hours interval */
                ie: number;
                /** last service for mileage interval, km */
                pm: number;
                /** last service for days interval, sec (UTC) */
                pt: number;
                /** last service for engine hours interval, h */
                pe: number;
                /** done times */
                c: number;
            };
        };
        /** maximal count of service intervals (-1 - unlimited) */
        simax: number;
    }
    interface TripDetectorAndFuelConsumption {
        /** trip detector */
        rtd: {
            /** type of movement detection */
            type: number;
            /** allow GPS correction: 0 - no, 1 - yes */
            gpsCorrection: number;
            /** min satellites count */
            minSat: number;
            /** min moving speed, km/h */
            minMovingSpeed: number;
            /** min parking time, seconds */
            minStayTime: number;
            /** max distance between messages, meters */
            maxMessagesDistance: number;
            /** min trip time, seconds */
            minTripTime: number;
            /** min trip distance, meters */
            minTripDistance: number;
        };
        /** fuel consumption */
        rfc: {
            /** type of calculation */
            calcTypes: number;
            /** detection of fuel fillings/thefts */
            fuelLevelParams: {
                /** flags of fillings and thefts */
                flags: number;
                /** ignore the messages after the start of motion, sec */
                ignoreStayTimeout: number;
                /** minimum fuel filling volume, litres */
                minFillingVolume: number;
                /** minimum stay timeout to detect fuel theft, sec */
                minTheftTimeout: number;
                /** minimum fuel theft volume, litres */
                minTheftVolume: number;
                /** filter quality (0..255) */
                filterQuality: number;
                /** timeout to separate consecutive fillings, sec */
                fillingsJoinInterval: number;
                /** timeout to separate consecutive thefts, sec */
                theftsJoinInterval: number;
                /** timeout to detect final filling volume, sec */
                extraFillingTimeout: number;
            };
            /** consumption math */
            fuelConsMath: {
                /** idling, litres per hour */
                idling: number;
                /** urban cycle, litres per 100 km */
                urban: number;
                /** suburban cycle, litres per 100 km */
                suburban: number;
            };
            /** consumption by rates */
            fuelConsRates: {
                /** summer consumption, litres per 100 km */
                consSummer: number;
                /** winter consumption, litres per 100 km */
                consWinter: number;
                /** winter from (month: 0-11) */
                winterMonthFrom: number;
                /** winter from (day 1-31) */
                winterDayFrom: number;
                /** winter to (month 0-11) */
                winterMonthTo: number;
                /** winter to (day 1-31) */
                winterDayTo: number;
            };
            /** impulse fuel consumption sensors */
            fuelConsImpulse: {
                /** max impulses */
                maxImpulses: number;
                /** skip first zero value */
                skipZero: number;
            };
        };
    }
    interface Commands {
        /** list of commands */
        cml: {
            /** sequence number of command */
            [key: string]: {
                /** ID */
                id: number;
                /** name */
                n: string;
                /** type */
                c: string;
                /** link type */
                l: string;
                /** parameters */
                p: string;
                /** access level (access rights that user must have to execute current command) */
                a: number;
                /** phone number flags: 0-any (primary, then secondary), 0x1-primary, 0x2-secondary */
                f: number;
            };
        };
        /** maximal count of commands (-1 - unlimited)  */
        cml_max: number;
    }
    interface MessageParameters {
        /** list of message parameters */
        prms: {
            /** parameter name */
            [key: string]: {
                /** parameter value */
                v: any;
                /** time of last value change */
                ct: number;
                /** time of last message with such parameter */
                at: number;
            };
        };
    }
    interface Connection {
        item: {
            netconn: boolean;
        };
    }
    interface Position {
        /** last known position */
        pos: {
            /** time (UTC) */
            t: number;
            /** latitude */
            y: number;
            /** longitude */
            x: number;
            /** altitude */
            z: number;
            /** speed */
            s: number;
            /** course */
            c: number;
            /** satellites count */
            sc: number;
        };
    }
    interface ProfileFields {
        pflds: {
            /** field ID */
            number: {
                /** field ID */
                id: number;
                /** field name */
                n: string;
                /** field value */
                v: string;
            };
        };
    }
}
