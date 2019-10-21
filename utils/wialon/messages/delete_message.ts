import { RemoteAPIError } from "../WialonError";

export interface Params extends RemoteAPIError {
	msgIndex: number;
}

export interface Response extends RemoteAPIError {}
