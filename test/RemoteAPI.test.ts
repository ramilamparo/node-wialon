import { RemoteAPI, defaultHost } from "../utils/wialon";
describe("RemoteAPI", () => {
	test("URL builder", () => {
		const svc = "token/login";
		const params = { token: "TOKEN" };
		const sid = "asdf";

		let correctUrl = `${defaultHost}?svc=${svc}`;
		let url = RemoteAPI.buildUrl(defaultHost, svc);
		expect(url).toEqual(correctUrl);

		correctUrl += `&params=${JSON.stringify(params)}`;
		url = RemoteAPI.buildUrl(defaultHost, svc, params);
		expect(url).toEqual(correctUrl);

		correctUrl += `&sid=${sid}`;
		url = RemoteAPI.buildUrl(defaultHost, svc, params, sid);
		expect(url).toEqual(correctUrl);
	});
});
