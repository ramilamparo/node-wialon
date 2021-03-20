import { WialonError } from "./WialonError";
export declare class WialonBatchError<T> extends Error {
    response: T;
    private errors;
    constructor(response: T);
    addError: (error: WialonError, index: number) => void;
    getErrors: () => {
        error: WialonError;
        index: number;
    }[];
    hasErrors: () => boolean;
}
