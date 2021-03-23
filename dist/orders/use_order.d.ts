export declare type CallMode = "create" | "update" | "delete" | "register" | "assign" | "reject" | "confirm";
export interface BaseParams {
    /** Resource ID */
    itemId: number;
    /** Custom field id, use 0 for create */
    id: number;
    /** Call mode action: create, update, delete, register, assign, reject and confirm. */
    callMode: CallMode;
}
interface AssignParams extends BaseParams {
    /** unit id */
    u: number;
}
interface CreateParams extends BaseParams {
    p: {
        /** Supplier Name */
        n: string;
        /** Supplier Phone Number 1 */
        p: string;
        /** Supplier Phone Number 2 */
        p2: string;
        /** Supplier Email */
        e: string;
        /** Address of Order */
        a: string;
        /** Volume of materials */
        v: number;
        /** Weight of materials */
        w: number;
        /** Cost of trip */
        c: number;
        /** Description */
        d: string;
        /** Time to order unloading */
        ut: number;
        /** Vehicle Type */
        t: string;
        /** Custom Id */
        cid: string;
        /** Notification flags 1 - sms p1 | 2 - sms p2 | 10 - email */
        ntf: number;
        /** Order Priority */
        pr: number;
        /** Tags */
        tags: string[];
        /** Route details */
        r: null;
        /** Rules for the trip, unknown */
        criterions: {
            max_late: null | number;
        } | null;
    };
    /** Order name */
    n: string;
    /** Allowed Timeframe - Start */
    tf: number;
    /** Allowed Timeframe - End */
    tt: number;
    /** Latitude */
    y: number;
    /** Longitude */
    x: number;
    /** default - 0 */
    uid: 0 | number;
    /**
     * Flags
     * 0x1	order would be marked as completed if there were at least one message within order area with zero speed in it
     * 0x2	order will be completed after leaving the order area
     * 0x4	start warehouse
     * 0x8	final warehouse
     * 0x10	reload warehouse
     * 0x20	fixed order
     * 0x40	Confirm possible only in radius
     * 0x80	Do not change status to complete automatically
     * 0x100	in case of auto-completion of the route, a copy of the unvisited application will be created
     */
    f: number;
    /** Location Radius, default 100 */
    r: number;
    /** Unit id empty, empty string for null */
    u: string | number;
    /** default - 0 */
    s: 0 | number;
    /**  acceptable time of advancing the schedule, s */
    trt: 1200;
    /** custom fields, any key-value pairs */
    cf: Object;
}
declare type GeneralResponse<T> = [number, T];
declare type DeleteResponse = [
    /** Deleted order id */
    number,
    null
];
export interface CreateResponse {
    /** order id */
    "​id": number;
    /** order name */
    "​n": string;
    "​p": {
        /** client name */
        n: string;
        /** phone */
        p: string;
        /** second phone */
        p2: string;
        /** email */
        e: string;
        /** address */
        a: string;
        /** volume */
        v: number;
        /** weight, kg */
        w: number;
        /** cost */
        c: number;
        /** time to order unloading - s */
        ut: number;
        /** type of vehicle */
        t: string;
        /** description */
        d: string;
        /** number of shipping document */
        uic: string;
        /** custom ID */
        cid: string;
        /** comment from confirm/reject */
        cm: string;
        /** [ warehouse ] list of unit ID's of warehouse ("123,456") */
        aff: string;
        /** [ warehouse ] list of geofences of warehouse ("resId_geofenceId,...") */
        z: string;
        /** notification flags */
        ntf: number;
        /** order priority */
        pr: number;
        /** route infotmation */
        r: {
            /** route id */
            id: string;
            /** number [0..] */
            i: string;
            /** mileage from previous point according to the plan, m */
            m: string;
            /** time from previous point according to the plan, s */
            t: string;
            /** time to notify customer before assumed delivery time, s */
            ndt: number;
            /** visit time according to the plan, UNIX_TIME */
            vt: string;
        };
    };
    /** order route, google polyline encoding format */
    "​rp": string;
    /** order flags */
    "​f": number;
    /** lower bound of order completion time, UNIX-time */
    tf: number;
    /** upper bound of order completion time, UNIX-time */
    "​tt": number;
    /** acceptable time of advancing the schedule, s */
    "​trt": number;
    /** uniqueId (is used as unique key in order history)  */
    "​uid": number;
    /** order point radius, m */
    "​r": number;
    /** order point latitude */
    "​y": number;
    /** order point longitude */
    "​x": number;
    /** unit id */
    "​u": number;
    /** order status: 0 - inactive (unit not binded) - 1 - active - 2 - completed on time, 3 - completed late, 4  rejected, 5 - unit is in the order area */
    "​s": number;
    /** order status flag (0x100 - rejected - 0x200 - confirmed, 0x400 - order is notifited) */
    "​sf": number;
    /** last status modification time */
    "​st": number;
    /** user time stamp  */
    tz: number;
    /** ETA Time calculated per 180 sec by routing (or streght) if there is next order and activated notification about ETA/milieage(RD) */
    eta: number;
    /** mileage */
    rd: number;
    /** mileage counter from unit */
    cnm: number;
    /** next_time - time when orders had status 'next' */
    nt: number;
    /** status completed, integer passed in parameter 'confirm', for example % */
    ds: number;
    /** list of orders uid which allow to current order:the current order cannot be visited until listed orders will be visited first */
    dp: number;
    /** order custom fields */
    cf: Object;
    /** start_transfer_time - time arrival */
    stt: number;
    /** done_transfer_time  - exit time */
    dtt: number;
    /** internal_flags, below description */
    if: number;
}
export declare type Params<CallModeKey extends CallMode> = CallModeKey extends Extract<CallMode, "create" | "update"> ? CreateParams : CallModeKey extends Extract<CallMode, "assign"> ? AssignParams : BaseParams;
export interface CallModeResponse extends Record<CallMode, any> {
    create: GeneralResponse<CreateResponse>;
    update: number[];
    delete: GeneralResponse<DeleteResponse>;
    assign: null;
    register: null;
    reject: null;
}
export declare type Response<CallModeKey extends CallMode> = CallModeResponse[CallModeKey];
export {};
