export declare type CallMode = "create" | "update" | "delete";
export interface BaseParams {
    /** Item ID */
    itemId: number;
    /** Custom field id, use 0 for create */
    id: number;
    /** Call mode action: create, update, and delete. */
    callMode: CallMode;
}
export interface CreateAndUpdateParams extends BaseParams {
    /** custom field name */
    n: string;
    /** custom field value */
    v: string;
}
export declare type Params<CallModeParam extends CallMode> = CallModeParam extends Extract<CallMode, "create" | "update"> ? CreateAndUpdateParams : BaseParams;
export interface CreateAndUpdateResponse {
    /** Custom Field ID */
    id: number;
    /** name */
    n: string;
    /** value */
    v: string;
}
export declare type Response<CallModeParam extends CallMode> = [
    number,
    CallModeParam extends Extract<CallMode, "create" | "update"> ? CreateAndUpdateParams : null
];
