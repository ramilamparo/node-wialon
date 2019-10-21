import { RemoteAPIError } from "../WialonError";

export interface Params {
	vin: string;
}

export interface Error {
	vin_lookup_result: {
		error: boolean /* true if error */;
		message: string /* error message */;
		reasons: string[] /* error reasons */;
	};
}

export interface Response extends RemoteAPIError {
	vin_lookup_result: {
		pflds: Array<{
			/* profile fields */
			n: string /* field name */;
			v: string /* field value */;
		}>;
	};
}
