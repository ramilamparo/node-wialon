import { WialonBatchError } from "../WialonBatchError";
import { WialonError } from "../WialonError";
import { RemoteAPI } from "../RemoteAPI";
import type { Params as CoreBatchParams } from "./batch";
import type {
	Params as CoreSearchItemsParams,
	Response as CoreSearchItemsResponse
} from "./search_items";
import type {
	Params as CoreSearchItemParams,
	Response as CoreSearchItemResponse
} from "./search_item";
import type { UnitsDataFormat } from "../format/Units";

type PossibleResponse = Partial<
	UnitsDataFormat.LastMessagePosition &
		UnitsDataFormat.AdministrativeFields &
		UnitsDataFormat.AdvancedProperties &
		UnitsDataFormat.AvailableCommands &
		UnitsDataFormat.Billing &
		UnitsDataFormat.Commands &
		UnitsDataFormat.Connection &
		UnitsDataFormat.Counters &
		UnitsDataFormat.CustomFields &
		UnitsDataFormat.CustomProperties &
		UnitsDataFormat.GUID &
		UnitsDataFormat.GeneralProperties &
		UnitsDataFormat.Maintenance &
		UnitsDataFormat.Message &
		UnitsDataFormat.MessageParameters &
		UnitsDataFormat.Position &
		UnitsDataFormat.ProfileFields &
		UnitsDataFormat.Sensors &
		UnitsDataFormat.TripDetectorAndFuelConsumption &
		UnitsDataFormat.UnitImage
>;

export class Core extends RemoteAPI {
	public searchItems = <Response = PossibleResponse>(
		params: CoreSearchItemsParams
	) => RemoteAPI.execute<
			CoreSearchItemsParams,
			CoreSearchItemsResponse<Response>
		>("core/search_items", params, this.sessionId, this.options.host);

	public searchItem = <Response = PossibleResponse>(
		params: CoreSearchItemParams
	) => RemoteAPI.execute<
			CoreSearchItemParams,
			CoreSearchItemResponse<Response>
		>("core/search_item", params, this.sessionId, this.options.host);

	public batch = async <Params, Response>(
		params: CoreBatchParams<Params>[]
	): Promise<Response> => {
		const data = await RemoteAPI.execute<
			{
				params: CoreBatchParams<Params>[];
				flags: number;
			},
			Response
		>("core/batch", { params, flags: 0 }, this.sessionId);

		if (data instanceof Array) {
			const batch: WialonBatchError<Response> = data.reduce(
				(
					batchErrors: WialonBatchError<Response>,
					value: WialonError | Response,
					index
				) => {
					if (value && "error" in value) {
						batchErrors.addError(new WialonError(value), index);
					}
					return batchErrors;
				},
				new WialonBatchError(data)
			);
			if (batch.hasErrors()) {
				throw batch;
			}
			return data;
		}
		throw new Error("Unknown response.");
	};
}
