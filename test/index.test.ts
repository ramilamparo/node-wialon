import { Wialon, defaultHost } from "../";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import login from "./fixtures/wialon/token/login.json";

describe("Login", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	test("Login", async () => {
		const url = Wialon.buildUrl(defaultHost, "token/login");
		const params = {
			token: "TOKEN"
		};
		mock.onPost(url).reply(200, login);
		const w = await Wialon.login(params);
		expect(mock.history.post[0].data._streams).toContain(
			JSON.stringify(params)
		);
		expect(w.user).toMatchObject(login);
	});
});
