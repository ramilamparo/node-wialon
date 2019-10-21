import { SVC, Params, Response as APIResponse } from "../";
import { RemoteAPIError } from "../WialonError";

export interface Params<T extends keyof Omit<Params, "core/batch">>
	extends RemoteAPIError {
	svc: SVC;
	params: Params[T];
	flag: number;
}

export type Response<
	T extends keyof Omit<APIResponse, "core/batch">
> = (APIResponse[T] & RemoteAPIError)[];
