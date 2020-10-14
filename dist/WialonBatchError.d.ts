import { WialonError } from "./WialonError";
export declare class WialonBatchError extends Error {
    errors: WialonError[];
    constructor(errors: WialonError[]);
}
