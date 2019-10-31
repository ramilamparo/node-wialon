import { Params, Response as APIResponse, SVC } from "../";
import { RemoteAPIError } from "..";

export interface Params<T extends keyof Omit<Params, "core/batch">>
	extends RemoteAPIError {
	svc: SVC;
	params: Params[T];
	flag: number;
}

export type Response<T extends keyof Omit<APIResponse, "core/batch">> = Array<
	APIResponse[T] & RemoteAPIError
>;
