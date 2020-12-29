import axios from "axios";
import { RemoteAPI } from "../RemoteAPI";
import { Core } from "../core";
import { UnitsDataFormat } from "../format/Units";

export class Utils extends RemoteAPI {
	public getUnits = <Response = UnitsDataFormat.GeneralProperties>({
		flags = 1
	}) => {
		const core = new Core(this.sessionId, this.options);
		return core.searchItems<Response>({
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
		});
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
				timeout: 0
			}
		);
		return res.data;
	};
}
