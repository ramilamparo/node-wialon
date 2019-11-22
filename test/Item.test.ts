import { Wialon, ItemUpdateProfileFieldResponse } from "../utils/wialon";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Mock } from "./utils";
import updateProfileFieldReply from "./fixtures/wialon/item/update_profile_field.json";

describe("item", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	test("update_profile_field", async () => {
		Mock.login(mock);
		const mocked = Mock.wialon(
			mock,
			"item/update_profile_field",
			updateProfileFieldReply
		);

		const w = await Wialon.login({ token: "TOKEN" });

		const fixture = mocked.reply as ItemUpdateProfileFieldResponse;

		const params = {
			itemId: fixture[0],
			n: fixture[1].n,
			v: fixture[1].v
		};

		const updated = await w.Item.updateProfileField(params);

		expect(
			mock.history.post[mock.history.post.length - 1].data._streams
		).toContain(JSON.stringify(params));
		expect(updated).toMatchObject(fixture);
	});
});
