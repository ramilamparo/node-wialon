import { Wialon } from "..";
import {
	Params as ItemUpdateCustomFieldParams,
	Response as ItemUpdateCustomFieldResponse
} from "./update_custom_field";
export class Item extends Wialon {
	public updateCustomField(params: ItemUpdateCustomFieldParams) {
		return Wialon.execute(
			"item/update_custom_field",
			params,
			this.user.eid,
			this.host
		);
	}
}

export { ItemUpdateCustomFieldParams, ItemUpdateCustomFieldResponse };
