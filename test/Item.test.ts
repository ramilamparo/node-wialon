import { Wialon, ItemUpdateCustomFieldResponse } from "../";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Mock } from "./utils";

describe("item", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	test("update_custom_field", async () => {
		Mock.login(mock);
		const mocked = Mock.updateCustomField(mock);

		const w = await Wialon.login({ token: "TOKEN" });

		const fixture = mocked.reply as ItemUpdateCustomFieldResponse;

		const params = {
			itemId: 1234,
			n: fixture[1].n,
			v: fixture[1].v
		};

		const updated = await w.Item.updateCustomField(params);

		expect(
			mock.history.post[mock.history.post.length - 1].data._streams
		).toContain(JSON.stringify(params));
		expect(updated).toMatchObject(fixture);
	});
});
