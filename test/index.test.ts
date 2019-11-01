import { Wialon } from "../";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Mock } from "./utils";

describe("token", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	test("login", async () => {
		const params = {
			token: "TOKEN"
		};

		const mocked = Mock.login(mock);

		const w = await Wialon.login(params);

		expect(
			mock.history.post[mock.history.post.length - 1].data._streams
		).toContain(JSON.stringify(params));

		expect(w.user).toMatchObject(mocked.reply);
	});
});
