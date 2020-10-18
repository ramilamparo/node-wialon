import type { TokenLoginResponse } from "../token";
export declare type Response = TokenLoginResponse;
export interface Params {
    operateAs: string;
    continueCurrentSession?: boolean;
}
