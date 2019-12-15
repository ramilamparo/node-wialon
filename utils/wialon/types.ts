import {
	CoreSearchItemsParams,
	CoreSearchItemParams,
	CoreSearchItemResponse,
	ItemUpdateProfileFieldParams,
	UnitGetVinInfoParams,
	MessagesDeleteMessageParams,
	MessagesLoadIntervalParams,
	TokenLoginParams,
	CoreSearchItemsResponse,
	ItemUpdateProfileFieldResponse,
	UnitGetVinInfoResponse,
	MessagesDeleteMessageResponse,
	MessagesLoadIntervalResponse,
	TokenLoginResponse,
	UnitUpdateServiceIntervalParams,
	UnitUpdateServiceIntervalResponse
} from "./";

export interface Params extends Partial<Record<SVC, any>> {
	"token/login": TokenLoginParams;
	"core/search_items": CoreSearchItemsParams;
	"core/search_item": CoreSearchItemParams;
	"messages/load_interval": MessagesLoadIntervalParams;
	"messages/delete_message": MessagesDeleteMessageParams;
	"unit/get_vin_info": UnitGetVinInfoParams;
	"unit/update_service_interval": UnitUpdateServiceIntervalParams;
	"item/update_profile_field": ItemUpdateProfileFieldParams;
}

export interface Response extends Partial<Record<SVC, any>> {
	"token/login": TokenLoginResponse;
	"core/search_items": CoreSearchItemsResponse;
	"core/search_item": CoreSearchItemResponse;
	"messages/load_interval": MessagesLoadIntervalResponse;
	"messages/delete_message": MessagesDeleteMessageResponse;
	"unit/get_vin_info": UnitGetVinInfoResponse;
	"unit/update_service_interval": UnitUpdateServiceIntervalResponse;
	"item/update_profile_field": ItemUpdateProfileFieldResponse;
}

export type SVC =
	| string 
	| "token/login"
	| "core/search_items"
	| "core/search_item"
	| "messages/load_interval"
	| "messages/delete_message"
	| "core/batch"
	| "unit/get_vin_info"
	| "item/update_profile_field"
	| "unit/update_service_interval";

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
