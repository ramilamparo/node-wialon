import { WialonError } from "./WialonError";
export declare class WialonBatchError extends Error {
    private errors;
    constructor();
    addError: (error: WialonError, index: number) => void;
    getErrors: () => {
        error: WialonError;
        index: number;
    }[];
    hasErrors: () => boolean;
}
