import { RemoteAPIError } from "..";

export interface Params extends RemoteAPIError {
	msgIndex: number;
}

export type Response = RemoteAPIError;
