import { WialonError } from "./";
export declare class WialonBatchError extends Error {
    errors: WialonError[];
    constructor(errors: WialonError[]);
}
