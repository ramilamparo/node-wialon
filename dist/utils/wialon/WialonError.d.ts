export declare class WialonError extends Error {
    static getMessage(errorCode?: number): string;
    constructor(error: RemoteAPIError);
}
export interface RemoteAPIError {
    error?: number;
}
