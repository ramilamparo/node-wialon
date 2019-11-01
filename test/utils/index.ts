import MockAdapter from "axios-mock-adapter";
import { Wialon } from "../../";
import { defaultHost } from "../../";
import updateProfileFieldReply from "../fixtures/wialon/item/update_profile_field.json";
import loginReply from "../fixtures/wialon/token/login.json";

export class Mock {
	public static login(mock: MockAdapter) {
		const url = Wialon.buildUrl(defaultHost, "token/login");
		mock.onPost(url).reply(200, loginReply);
		return {
			reply: loginReply,
			url
		};
	}
	public static updateProfileField(mock: MockAdapter) {
		const url = Wialon.buildUrl(defaultHost, "item/update_profile_field");
		mock.onPost(url).reply(200, updateProfileFieldReply);

		return {
			reply: updateProfileFieldReply,
			url
		};
	}
}
