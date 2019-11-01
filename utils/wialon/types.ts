import {
	CoreSearchItemsParams,
	ItemUpdateCustomFieldParams,
	UnitGetVinInfoParams,
	MessagesDeleteMessageParams,
	MessagesLoadIntervalParams,
	TokenLoginParams,
	CoreSearchItemsResponse,
	ItemUpdateCustomFieldResponse,
	UnitGetVinInfoResponse,
	MessagesDeleteMessageResponse,
	MessagesLoadIntervalResponse,
	TokenLoginResponse
} from "./";

export interface Params extends Partial<Record<SVC, any>> {
	"token/login": TokenLoginParams;
	"core/search_items": CoreSearchItemsParams;
	"messages/load_interval": MessagesLoadIntervalParams;
	"messages/delete_message": MessagesDeleteMessageParams;
	"unit/get_vin_info": UnitGetVinInfoParams;
	"item/update_custom_field": ItemUpdateCustomFieldParams;
}

export interface Response extends Partial<Record<SVC, any>> {
	"token/login": TokenLoginResponse;
	"core/search_items": CoreSearchItemsResponse;
	"messages/load_interval": MessagesLoadIntervalResponse;
	"messages/delete_message": MessagesDeleteMessageResponse;
	"unit/get_vin_info": UnitGetVinInfoResponse;
	"item/update_custom_field": ItemUpdateCustomFieldResponse;
}

export type SVC =
	| "token/login"
	| "core/search_items"
	| "messages/load_interval"
	| "messages/delete_message"
	| "core/batch"
	| "unit/get_vin_info"
	| "item/update_custom_field";

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
