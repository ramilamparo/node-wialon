import { RemoteAPIError, ProfileField } from "..";
export interface Params {
    vin: string;
}
export interface Error {
    vin_lookup_result: {
        error: boolean;
        message: string;
        reasons: string[];
    };
}
export interface Response extends RemoteAPIError {
    vin_lookup_result: {
        pflds: {
            [key: string]: {
                n: ProfileField;
                v: string;
            };
        };
    };
}
