import { RemoteAPI } from "../RemoteAPI";
import type {
	ItemUpdateProfileFieldParams,
	ItemUpdateProfileFieldResponse,
	UpdateCustomFieldParams,
	UpdateCustomFieldCallMode,
	UpdateCustomFieldResponse
} from ".";

export class Item extends RemoteAPI {
	public updateProfileField(params: ItemUpdateProfileFieldParams) {
		return RemoteAPI.execute<
			ItemUpdateProfileFieldParams,
			ItemUpdateProfileFieldResponse
		>("item/update_profile_field", params, this.sessionId, this.options.host);
	}

	public updateCustomField = <CallMode extends UpdateCustomFieldCallMode>(
		params: UpdateCustomFieldParams<CallMode>
	) => {
		return RemoteAPI.execute<
			UpdateCustomFieldParams<CallMode>,
			UpdateCustomFieldResponse<CallMode>
		>("item/update_custom_field", params, this.sessionId, this.options.host);
	};
}
