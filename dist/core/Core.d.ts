import { RemoteAPI } from "../RemoteAPI";
import type { Params as CoreBatchParams } from "./batch";
import type { Params as CoreSearchItemsParams, Response as CoreSearchItemsResponse } from "./search_items";
import type { Params as CoreSearchItemParams, Response as CoreSearchItemResponse } from "./search_item";
import type { Params as CoreDuplicateParams } from "./duplicate";
import type { LastMessagePosition, AdministrativeFields, AdvancedProperties, AvailableCommands, Billing, Commands, Connection, Counters, CustomFields, CustomProperties, GUID, GeneralProperties, Maintenance, Message, MessageParameters, Position, ProfileFields, Sensors, TripDetectorAndFuelConsumption, UnitImage } from "../format/Units";
export declare class Core extends RemoteAPI {
    searchItems: <Response_1 = CoreSearchItemsResponse<Partial<LastMessagePosition & AdministrativeFields & AdvancedProperties & AvailableCommands & Billing & Commands & Connection & Counters & CustomFields & CustomProperties & GUID & GeneralProperties & Maintenance & Message & MessageParameters & Position & ProfileFields & Sensors & TripDetectorAndFuelConsumption & UnitImage>>>(params: CoreSearchItemsParams) => Promise<Response_1>;
    searchItem: <Response_1 = CoreSearchItemResponse<Partial<LastMessagePosition & AdministrativeFields & AdvancedProperties & AvailableCommands & Billing & Commands & Connection & Counters & CustomFields & CustomProperties & GUID & GeneralProperties & Maintenance & Message & MessageParameters & Position & ProfileFields & Sensors & TripDetectorAndFuelConsumption & UnitImage>>>(params: CoreSearchItemParams) => Promise<Response_1>;
    duplicate: (params?: Partial<CoreDuplicateParams> | undefined) => Promise<import("..").TokenLoginResponse>;
    batch: <Params, Response_1>(params: CoreBatchParams<Params>) => Promise<Response_1>;
}
