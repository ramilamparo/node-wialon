import { RemoteAPIError } from "../WialonError";

export interface Params extends RemoteAPIError {
	msgIndex: number;
}

export type Response = RemoteAPIError;
