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
export declare type Response = [number, {
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
} | null];
