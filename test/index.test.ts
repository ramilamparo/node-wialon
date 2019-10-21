import Wialon from "../";
import { Wialon as WialonTypings } from "../utils/wialon";
import loginFixture from "./fixtures/wialon/token/login.json";
import searchItemsFixture from "./fixtures/wialon/core/search_items.json";
import nock from "nock";
import {
	Params as LoginParams,
	Response as LoginResponse
} from "../utils/wialon/token/login";
import {
	Params as SearchParams,
	Response as SearchResponse
} from "../utils/wialon/core/search_items";

describe("Wialon APIs", () => {
	const host = "https://hst-api.wialon.com";
	const params: LoginParams = { token: "TEST" };
	let w: Wialon;
	const TOKEN = "Dummy token";

	beforeEach(() => {
		w = new Wialon(TOKEN, host);
	});

	describe("execute function", async () => {
		const params = { token: TOKEN };
		const loginData = await w.execute<WialonTypings.Response["token"]["login"]>(
			"token/login",
			params
		);

		nock(host)
			.post("/wialon/ajax.html", `params=${JSON.stringify(params)}`)
			.reply(200, loginFixture);

		expect(loginData).toMatchObject(loginFixture);
		const sid = loginData.eid;
		const unitData = await w.execute<
			WialonTypings.Response["core"]["search_items"]
		>("core/search_items", { token: TOKEN }, sid);
		expect(unitData).toMatchObject(searchItemsFixture);
	});

	describe("login", () => {
		it("Should receive the login data.", async () => {
			nock(host)
				.post("/wialon/ajax.html", `params=${JSON.stringify(params)}`)
				.reply(200, loginFixture);

			const loginData = await w.login(TOKEN);
			expect(loginData).toMatchObject(loginFixture);
		});
	});
});
