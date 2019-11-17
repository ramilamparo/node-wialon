import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Wialon } from "../utils/wialon";
import { Mock } from "./utils";
import searchItemReply from "./fixtures/wialon/core/search_item.json";
import searchItemsReply from "./fixtures/wialon/core/search_items.json";

describe("core", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	test("search_items", async () => {
		Mock.login(mock);
		const mocked = Mock.wialon(mock, "core/search_items", searchItemsReply);

		const w = await Wialon.login({ token: "TOKEN" });

		const params = {
			spec: {
				itemsType: "avl_unit",
				propName: "sys_name",
				propValueMask: "*",
				sortType: "sys_name",
				propType: "property"
			},
			force: 1,
			flags: 1,
			from: 0,
			to: 0
		};

		const updated = await w.Core.searchItems(params);

		expect(
			mock.history.post[mock.history.post.length - 1].data._streams
		).toContain(JSON.stringify(params));
		expect(updated).toMatchObject(mocked.reply);
	});

	test("search_item", async () => {
		Mock.login(mock);
		const mocked = Mock.wialon(mock, "core/search_item", searchItemReply);

		const w = await Wialon.login({ token: "TOKEN" });

		const params = {
			id: 1,
			flags: 1
		};

		const updated = await w.Core.searchItem(params);

		expect(
			mock.history.post[mock.history.post.length - 1].data._streams
		).toContain(JSON.stringify(params));
		expect(updated).toMatchObject(mocked.reply);
	});
});
