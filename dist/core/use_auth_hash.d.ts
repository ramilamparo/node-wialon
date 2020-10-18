import type { TokenLoginResponse } from "../token";
export interface Params {
    authHash: string;
    operateAs: string;
    checkService: string;
}
export declare type Response = TokenLoginResponse;
