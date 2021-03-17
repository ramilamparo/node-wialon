import axios from "axios";
import FormData from "form-data";
import { RemoteAPI } from "../RemoteAPI";
import { Core } from "../core";
import { UnitsDataFormat } from "../format/Units";

export interface UtilsGetAddressCoords {
	lat: number;
	lng: number;
}

export interface UtilsGetAddressParams {
	/** array with coordinates */
	coords: UtilsGetAddressCoords[];
	/** minimal city radius, km (optional). Minimal city radius says that if no city has been found within maximum distance from unit (the previous option), then the address is bound to another city. How big this city should be to form the address, you indicate here – minimum radius of a city. This can be used to eliminate small cities from addresses. */
	city_radius?: number;
	/** maximal distance from unit, km (optional). Maximal distance from unit says that if unit is located near a road and there is a city (i.e. city, town, village) within the indicated distance, then in the address you will have the road's name and distance to the city. */
	dist_from_unit?: number;
	/**  metrics of maximal distance from unit (optional) */
	txt_dist?: number;
	/** flags of output format (see below) */
	flags: number;
	/** current user ID  */
	uid: number;
}

export type UtilsGetAddressResponse = string[];

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

	public getAddress = async (params: UtilsGetAddressParams) => {
		const formData = new FormData();
		const authDetails = await this.getAuthDetails();
		formData.append("uid", String(authDetails.user.id));
		formData.append("sid", this.sessionId);
		formData.append("flags", String(params.flags));
		formData.append("coords", JSON.stringify(params.coords));
		if (params.city_radius) {
			formData.append("flags", String(params.city_radius));
		}
		if (params.dist_from_unit) {
			formData.append("flags", String(params.dist_from_unit));
		}
		if (params.txt_dist) {
			formData.append("flags", String(params.txt_dist));
		}

		const res = await axios.post<UtilsGetAddressResponse>(
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
