import {
	CoreBatchParams,
	CoreBatchResponse,
	CoreSearchItemsParams,
	CoreSearchItemsResponse
} from "./core";
import {
	ItemUpdateCustomFieldParams,
	ItemUpdateCustomFieldResponse
} from "./item";
import {
	MessagesDeleteMessageParams,
	MessagesDeleteMessageResponse,
	MessagesLoadIntervalParams,
	MessagesLoadIntervalResponse
} from "./messages";
import { TokenLoginParams, TokenLoginResponse } from "./token";
import { UnitGetVinInfoParams, UnitGetVinInfoResponse } from "./unit";
import { RemoteAPIError, WialonBatchError, WialonError } from "./WialonError";

export * from "./Wialon";
export {
	WialonError,
	WialonBatchError,
	RemoteAPIError,
	TokenLoginParams,
	TokenLoginResponse,
	CoreSearchItemsParams,
	CoreSearchItemsResponse,
	MessagesLoadIntervalParams,
	MessagesLoadIntervalResponse,
	MessagesDeleteMessageParams,
	MessagesDeleteMessageResponse,
	CoreBatchParams,
	CoreBatchResponse,
	UnitGetVinInfoParams,
	UnitGetVinInfoResponse,
	ItemUpdateCustomFieldParams
};

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

export type ProfileField =
	| "vehicle_type"
	| "vin"
	| "registration_plate"
	| "brand"
	| "year"
	| "color";
