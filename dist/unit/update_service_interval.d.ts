export interface Params {
    itemId: number;
    id: number;
    callMode: string;
    n?: string;
    t?: string;
    im?: number;
    it?: number;
    ie?: number;
    pm?: number;
    pt?: number;
    pe?: number;
    c?: number;
}
export declare type Response = [
/** service interval ID */
number, {
    /** service interval ID */
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
} | null];
