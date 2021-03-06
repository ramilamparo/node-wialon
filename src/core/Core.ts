import axios from "axios";
import FormData from "form-data";
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
	) => {
		return RemoteAPI.execute<
			CoreSearchItemsParams,
			CoreSearchItemsResponse<Response>
		>("core/search_items", params, this.sessionId, this.options.host);
	};

	public searchItem = <Response = PossibleResponse>(
		params: CoreSearchItemParams
	) => {
		return RemoteAPI.execute<
			CoreSearchItemParams,
			CoreSearchItemResponse<Response>
		>("core/search_item", params, this.sessionId, this.options.host);
	};

	public batch = async <Params, Response>(
		params: CoreBatchParams<Params>
	): Promise<Response> => {
		const formData = new FormData();
		formData.append("params", JSON.stringify({ params, flags: 0 }));
		formData.append("sid", this.sessionId);

		const res = await axios.post<Response>(
			`${this.options.host}/wialon/ajax.html?sid=${this.sessionId}&svc=core/batch`,
			formData,
			{
				headers: { ...formData.getHeaders() },
				timeout: 0
			}
		);

		if (res.data instanceof Array) {
			const errors: WialonError[] = res.data.reduce(
				(batchErrors: WialonError[], value: WialonError | Response) => {
					if (value && "error" in value) {
						batchErrors.push(new WialonError(value));
					}
					return batchErrors;
				},
				[]
			);
			if (errors.length) {
				throw new WialonBatchError(errors);
			}
			return res.data;
		}
		throw new Error("Unknown response.");
	};
}
