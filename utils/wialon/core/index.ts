import axios from "axios";
import FormData from "form-data";
import {
	Params,
	Response,
	Wialon,
	WialonBatchError,
	WialonError,
	RemoteAPI
} from "..";
import {
	Params as CoreBatchParams,
	Response as CoreBatchResponse
} from "./batch";
import {
	Params as CoreSearchItemsParams,
	Response as CoreSearchItemsResponse
} from "./search_items";
import {
	Params as CoreSearchItemParams,
	Response as CoreSearchItemResponse
} from "./search_item";

export class Core extends RemoteAPI {
	public searchItems = (params: Params["core/search_items"]) => {
		return Wialon.execute(
			"core/search_items",
			params,
			this.user.eid,
			this.host
		);
	};

	public searchItem = (params: Params["core/search_item"]) => {
		return Wialon.execute("core/search_item", params, this.user.eid, this.host);
	};

	public batch = async <T extends keyof Omit<Params, "core/batch">>(
		params: CoreBatchParams<T>
	): Promise<CoreBatchResponse<T>> => {
		const formData = new FormData();
		formData.append("params", JSON.stringify({ params, flags: 0 }));
		formData.append("sid", this.user.eid);

		const res = await axios.post<CoreBatchResponse<T>>(
			`${this.host}/wialon/ajax.html?sid=${this.user.eid}&svc=core/batch`,
			formData,
			{
				headers: { ...formData.getHeaders() },
				timeout: 0
			}
		);
		const errors = res.data.reduce((batchErrors: WialonError[], value) => {
			if (value && value.error) {
				batchErrors.push(new WialonError(value));
			}
			return batchErrors;
		}, []);
		if (errors.length) {
			throw new WialonBatchError(errors);
		}
		return res.data;
	};
}

export {
	CoreBatchParams,
	CoreBatchResponse,
	CoreSearchItemsParams,
	CoreSearchItemsResponse,
	CoreSearchItemParams,
	CoreSearchItemResponse
};
