import MockAdapter from "axios-mock-adapter";
import { Wialon, SVC } from "../../";
import { defaultHost } from "../../";
import loginReply from "../fixtures/wialon/token/login.json";

export class Mock {
	public static wialon<T>(mock: MockAdapter, svc: SVC, reply: T) {
		const url = Wialon.buildUrl(defaultHost, svc);
		mock.onPost(url).reply(200, reply);
		return { url, reply };
	}
	public static login(mock: MockAdapter) {
		return Mock.wialon(mock, "token/login", loginReply);
	}
}
