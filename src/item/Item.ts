import { RemoteAPI } from "../RemoteAPI";
import type {
	ItemUpdateProfileFieldParams,
	ItemUpdateProfileFieldResponse,
	ItemUpdateCustomFieldParams,
	ItemUpdateCustomFieldCallMode,
	ItemUpdateCustomFieldResponse
} from ".";

export class Item extends RemoteAPI {
	public updateProfileField(params: ItemUpdateProfileFieldParams) {
		return RemoteAPI.execute<
			ItemUpdateProfileFieldParams,
			ItemUpdateProfileFieldResponse
		>("item/update_profile_field", params, this.sessionId, this.options.host);
	}

	public updateCustomField = <CallMode extends ItemUpdateCustomFieldCallMode>(
		params: ItemUpdateCustomFieldParams<CallMode>
	) =>
		RemoteAPI.execute<
			ItemUpdateCustomFieldParams<CallMode>,
			ItemUpdateCustomFieldResponse<CallMode>
		>("item/update_custom_field", params, this.sessionId, this.options.host);
}
