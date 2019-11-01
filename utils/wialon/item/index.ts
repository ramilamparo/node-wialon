import { RemoteAPI } from "..";
import {
	Params as ItemUpdateProfileFieldParams,
	Response as ItemUpdateProfileFieldResponse
} from "./update_profile_field";
export class Item extends RemoteAPI {
	public updateProfileField(params: ItemUpdateProfileFieldParams) {
		return RemoteAPI.execute(
			"item/update_profile_field",
			params,
			this.user.eid,
			this.host
		);
	}
}

export { ItemUpdateProfileFieldParams, ItemUpdateProfileFieldResponse };
