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
import type {
	LastMessagePosition,
	AdministrativeFields,
	AdvancedProperties,
	AvailableCommands,
	Billing,
	Commands,
	Connection,
	Counters,
	CustomFields,
	CustomProperties,
	GUID,
	GeneralProperties,
	Maintenance,
	Message,
	MessageParameters,
	Position,
	ProfileFields,
	Sensors,
	TripDetectorAndFuelConsumption,
	UnitImage
} from "../format/Units";

type PossibleResponse = Partial<
	LastMessagePosition &
		AdministrativeFields &
		AdvancedProperties &
		AvailableCommands &
		Billing &
		Commands &
		Connection &
		Counters &
		CustomFields &
		CustomProperties &
		GUID &
		GeneralProperties &
		Maintenance &
		Message &
		MessageParameters &
		Position &
		ProfileFields &
		Sensors &
		TripDetectorAndFuelConsumption &
		UnitImage
>;

export class Core extends RemoteAPI {
	public searchItems = <Response = CoreSearchItemsResponse<PossibleResponse>>(
		params: CoreSearchItemsParams
	) => {
		return RemoteAPI.execute<CoreSearchItemsParams, Response>(
			"core/search_items",
			params,
			this.user.eid,
			this.host
		);
	};

	public searchItem = <Response = CoreSearchItemResponse<PossibleResponse>>(
		params: CoreSearchItemParams
	) => {
		return RemoteAPI.execute<CoreSearchItemParams, Response>(
			"core/search_item",
			params,
			this.user.eid,
			this.host
		);
	};

	public batch = async <Params, Response>(
		params: CoreBatchParams<Params>
	): Promise<Response> => {
		const formData = new FormData();
		formData.append("params", JSON.stringify({ params, flags: 0 }));
		formData.append("sid", this.user.eid);

		const res = await axios.post<Response>(
			`${this.host}/wialon/ajax.html?sid=${this.user.eid}&svc=core/batch`,
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
