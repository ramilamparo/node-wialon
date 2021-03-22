export declare type CallMode = "create" | "update" | "delete" | "reset_image";
/** Parameters required only for create and update call mode. */
export interface CreateAndUpdateParams extends BaseParams<Extract<"create" | "update", CallMode>> {
    /** extended JSON (with exemple to push notifications) */
    ej?: {
        apps: Array<Record<string, string>>;
    };
    /** code */
    c?: string;
    /** check sum of driver image */
    ck?: string;
    /** description */
    ds?: string;
    /** name */
    n?: string;
    /** phone number like +1234567890 (+ must be encoded as %2B) */
    p?: string;
    /** aspect ratio of driver image */
    r?: number;
    /** flags (4 - exclusive) */
    f?: number;
    /** password for mobile authorization */
    pwd?: string;
    /** custom fields in the format “name”:“value”  */
    jp?: {
        [key: string]: string;
    };
}
export interface BaseParams<CallModeParam extends CallMode> {
    /** resource ID */
    itemId: number;
    /** driver ID (0 to create) */
    id: number;
    /** action: create, update, delete, reset_image */
    callMode: CallModeParam;
}
export declare type Params<CallModeParam extends CallMode> = CallModeParam extends Extract<"create" | "update", CallModeParam> ? CreateAndUpdateParams : BaseParams<Extract<CallMode, "delete" | "reset_image">>;
export interface CreateAndUpdateResponse {
    /** driver ID */
    id: number;
    /** name */
    n: string;
    /** code */
    c: string;
    /** extended JSON */
    ej: string;
    /** custom fields */
    jp: {
        /** name: value */
        [key: string]: string;
    };
    /** password for mobile authorization */
    pwd: string;
    /** description */
    ds: string;
    /** phone number */
    p: string;
    /** aspect ratio of driver image */
    r: number;
    /** check sum of driver image */
    ck: number;
    /** bound unit */
    bu: number;
    /** previous bound unit */
    pu: number;
    /** time of last binding/*unbinding */
    bt: number;
    /** position */
    pos: {
        /** latitude */
        y: number;
        /** longitude */
        x: number;
    };
}
export declare type Response<CallModeParam extends CallMode> = [
    number,
    CallModeParam extends Extract<"create" | "update", CallMode> ? CreateAndUpdateResponse : null
];
