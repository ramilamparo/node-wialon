import type { RemoteAPIError, ProfileField } from "..";

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
		pflds: {
			[key: string]: {
				/* profile fields */
				n: ProfileField /* field name */;
				v: string /* field value */;
			};
		};
	};
}
