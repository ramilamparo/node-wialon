import type { TokenLoginResponse } from "../token";

export type Response = TokenLoginResponse;

export interface Params {
	operateAs: string;
	continueCurrentSession?: boolean;
}
