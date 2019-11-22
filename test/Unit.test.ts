import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Wialon } from "../utils/wialon";
import { Mock } from "./utils";
import { get } from "./fixtures/wialon/unit/update_service_interval";

describe("unit", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	describe("update_service_interval", () => {
		test("create", async () => {
			Mock.login(mock);
			const mocked = Mock.wialon(
				mock,
				"unit/update_service_interval",
				get("create")
			);

			const w = await Wialon.login({ token: "TOKEN" });

			const params = {
				itemId: 1,
				id: 1,
				callMode: "create",
				n: "Service interval name",
				t: "Sample",
				im: 1,
				it: 1,
				ie: 1,
				pm: 0,
				pt: 0,
				pe: 0,
				c: 0
			};

			const updated = await w.Unit.updateServiceInterval(params);

			expect(
				mock.history.post[mock.history.post.length - 1].data._streams
			).toContain(JSON.stringify(params));
			expect(updated).toMatchObject(mocked.reply);
		});

		test("update", async () => {
			Mock.login(mock);
			const mocked = Mock.wialon(
				mock,
				"unit/update_service_interval",
				get("update")
			);

			const w = await Wialon.login({ token: "TOKEN" });

			const params = {
				itemId: 1,
				id: 1,
				callMode: "update",
				n: "Service interval name",
				t: "Sample",
				im: 1,
				it: 1,
				ie: 1,
				pm: 0,
				pt: 0,
				pe: 0,
				c: 0
			};

			const updated = await w.Unit.updateServiceInterval(params);

			expect(
				mock.history.post[mock.history.post.length - 1].data._streams
			).toContain(JSON.stringify(params));
			expect(updated).toMatchObject(mocked.reply);
		});

		test("delete", async () => {
			Mock.login(mock);
			const mocked = Mock.wialon(
				mock,
				"unit/update_service_interval",
				get("delete")
			);

			const w = await Wialon.login({ token: "TOKEN" });

			const params = {
				itemId: 1,
				id: 1,
				callMode: "delete"
			};

			const updated = await w.Unit.updateServiceInterval(params);

			expect(
				mock.history.post[mock.history.post.length - 1].data._streams
			).toContain(JSON.stringify(params));
			expect(updated).toMatchObject(mocked.reply);
		});
	});
});
