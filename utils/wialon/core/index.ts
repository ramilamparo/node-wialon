import axios from "axios";
import FormData from "form-data";
import { Wialon, Params, WialonError, WialonBatchError } from "..";

import {
	Params as CoreBatchParams,
	Response as CoreBatchResponse
} from "./batch";

import {
	Params as CoreSearchItemsParams,
	Response as CoreSearchItemsResponse
} from "./search_items";

export class Core extends Wialon {
	searchItems = (params: Params["core/search_items"]) => {
		return Wialon.execute(
			"core/search_items",
			params,
			this.user.eid,
			this.host
		);
	};

	batch = async <T extends keyof Omit<Params, "core/batch">>(
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
		const errors = res.data.reduce((errors: WialonError[], value) => {
			if (value && value.error) {
			}
			return errors;
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
	CoreSearchItemsResponse
};
