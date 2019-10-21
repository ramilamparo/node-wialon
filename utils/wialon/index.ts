import { WialonError, WialonBatchError, RemoteAPIError } from "./WialonError";

import { TokenLoginParams, TokenLoginResponse } from "./token";
import { CoreSearchItemsParams, CoreSearchItemsResponse } from "./core";
import {
	MessagesLoadIntervalParams,
	MessagesLoadIntervalResponse
} from "./messages";
import {
	MessagesDeleteMessageParams,
	MessagesDeleteMessageResponse
} from "./messages";
import { CoreBatchParams, CoreBatchResponse } from "./core";
import { UnitGetVinInfoParams, UnitGetVinInfoResponse } from "./unit";
import {
	ItemUpdateCustomFieldParams,
	ItemUpdateCustomFieldResponse
} from "./item";

export * from "./Wialon";

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
