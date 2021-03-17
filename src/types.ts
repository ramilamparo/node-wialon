export type SVC =
	| "token/login"
	| "core/search_items"
	| "core/search_item"
	| "messages/load_last"
	| "messages/load_interval"
	| "messages/delete_message"
	| "core/batch"
	| "unit/get_vin_info"
	| "unit/exec_cmd"
	| "item/update_profile_field"
	| "unit/update_service_interval"
	| "report/exec_report"
	| "report/cleanup_result"
	| "report/select_result_rows"
	| "core/use_auth_hash"
	| "resource/update_driver"
	/** Allows svc that are not from the list. https://github.com/Microsoft/TypeScript/issues/29729 */
	| (string & { fromT?: any });

export enum ProfileField {
	VEHICLE_TYPE = "vehicle_type",
	VIN = "vin",
	REGISTRATION_PLATE = "registration_plate",
	BRAND = "brand",
	YEAR = "year",
	COLOR = "color",
	MODEL = "model"
}

export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> &
	Pick<T, K>;
