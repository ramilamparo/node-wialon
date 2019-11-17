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
	TokenLoginResponse
} from "./";

export interface Params extends Partial<Record<SVC, any>> {
	"token/login": TokenLoginParams;
	"core/search_items": CoreSearchItemsParams;
	"core/search_item": CoreSearchItemParams;
	"messages/load_interval": MessagesLoadIntervalParams;
	"messages/delete_message": MessagesDeleteMessageParams;
	"unit/get_vin_info": UnitGetVinInfoParams;
	"item/update_profile_field": ItemUpdateProfileFieldParams;
}

export interface Response extends Partial<Record<SVC, any>> {
	"token/login": TokenLoginResponse;
	"core/search_items": CoreSearchItemsResponse;
	"core/search_item": CoreSearchItemResponse;
	"messages/load_interval": MessagesLoadIntervalResponse;
	"messages/delete_message": MessagesDeleteMessageResponse;
	"unit/get_vin_info": UnitGetVinInfoResponse;
	"item/update_profile_field": ItemUpdateProfileFieldResponse;
}

export type SVC =
	| "token/login"
	| "core/search_items"
	| "core/search_item"
	| "messages/load_interval"
	| "messages/delete_message"
	| "core/batch"
	| "unit/get_vin_info"
	| "item/update_profile_field";

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
