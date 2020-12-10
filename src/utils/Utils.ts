import axios from "axios";
import { RemoteAPI } from "../RemoteAPI";

export class Utils extends RemoteAPI {
	public getUnits = ({ flags = 1 }) => {
		return RemoteAPI.execute(
			"core/search_items",
			{
				spec: {
					itemsType: "avl_unit",
					propName: "sys_name",
					propValueMask: "*",
					sortType: "sys_name",
					propType: "property",
				},
				force: 1,
				flags,
				from: 0,
				to: 0,
			},
			this.sessionId,
			this.options.host
		);
	};

	public getAddress = async (
		{ lat, lng }: { lat: number; lng: number },
		flags = 54321
	) => {
		const formData = new FormData();
		const authDetails = await this.getAuthDetails();
		formData.append("uid", String(authDetails.user.id));
		formData.append("sid", this.sessionId);
		formData.append("flags", String(flags));
		formData.append("coords", JSON.stringify([{ lat, lng }]));

		const res = await axios.post(
			`https://geocode-maps.wialon.com/${this.options.host.replace(
				"https://",
				""
			)}/gis_geocode`,
			formData,
			{
				timeout: 0,
			}
		);
		return res.data;
	};
}
