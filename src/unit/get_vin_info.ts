import type { RemoteAPIError, ProfileField } from "..";

export interface Params {
	vin: string;
}

export interface Error {
	vin_lookup_result: {
		/** true if error */
		error: boolean;
		/** error message */
		message: string;
		/** error reasons */
		reasons: string[];
	};
}

export interface Response extends RemoteAPIError {
	vin_lookup_result: {
		pflds: {
			/** profile fields */
			[key: string]: {
				/** field name */
				n: ProfileField;
				/** field value */
				v: string;
			};
		};
	};
}
