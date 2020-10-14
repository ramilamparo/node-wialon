import { RemoteAPI } from "../RemoteAPI";
import type {
	Params as ItemUpdateProfileFieldParams,
	Response as ItemUpdateProfileFieldResponse
} from "./update_profile_field";

export class Item extends RemoteAPI {
	public updateProfileField(params: ItemUpdateProfileFieldParams) {
		return RemoteAPI.execute<
			ItemUpdateProfileFieldParams,
			ItemUpdateProfileFieldResponse
		>("item/update_profile_field", params, this.user.eid, this.host);
	}
}
