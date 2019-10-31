import axios from "axios";
import { RemoteAPI } from "..";

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
					propType: "property"
				},
				force: 1,
				flags,
				from: 0,
				to: 0
			},
			this.user.eid,
			this.host
		);
	};
	public getAddress = async (
		{ lat, lng }: { lat: number; lng: number },
		flags = 54321
	) => {
		const formData = new FormData();
		formData.append("uid", String(this.user.user.id));
		formData.append("sid", this.user.eid);
		formData.append("flags", String(flags));
		formData.append("coords", JSON.stringify([{ lat, lng }]));

		const res = await axios.post(
			`https://geocode-maps.wialon.com/${this.host.replace(
				"https://",
				""
			)}/gis_geocode`,
			formData,
			{
				timeout: 0
			}
		);
		return res.data;
	};
}
