import { RemoteAPI } from "..";
import {
	Params as ItemUpdateCustomFieldParams,
	Response as ItemUpdateCustomFieldResponse
} from "./update_custom_field";
export class Item extends RemoteAPI {
	public updateCustomField(params: ItemUpdateCustomFieldParams) {
		return RemoteAPI.execute(
			"item/update_custom_field",
			params,
			this.user.eid,
			this.host
		);
	}
}

export { ItemUpdateCustomFieldParams, ItemUpdateCustomFieldResponse };
