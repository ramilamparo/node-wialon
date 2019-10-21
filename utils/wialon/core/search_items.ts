import { RemoteAPIError } from "../WialonError";

export interface Params extends RemoteAPIError {
	spec: {
		itemsType: string;
		propName: string;
		propValueMask: string;
		sortType: string;
		propType: string;
		or_logic?: boolean;
	};
	force?: number;
	flags: number;
	from: number;
	to: number;
}

export interface Response extends RemoteAPIError {
	searchSpec: {
		itemsTypes: string;
		propName: string;
		propValueMask: string;
		sortTypes: string;
		propType: string;
		or_logic: string;
	};
	daraFlags: number;
	totalItemsCount: number;
	indexFrom: number;
	indexTo: number;
	items: Array<
		Partial<{
			id: number;
			nm: string;
			uid: string;
			uid2: string;
			hw: number;
			ph: string;
			ph2: string;
			psw: string;
			pflds: {
				[key: string]: {
					id: number;
					n: string;
					v: string;
				};
			};
			zl: Partial<{
				[key: string]: Partial<{
					/* sequence number of geofence */
					n: string /* name */;
					d: string /* description */;
					id: number /* ID */;
					f: number /* flags */;
					t: number /* type: 1 - line, 2 - polygon, 3 - circle */;
					e: number /* check sum (CRC16) */;
					b: {
						/* configuration for rendering geofences */
						min_x: number /* minimal longitude */;
						min_y: number /* minimal latitude */;
						max_x: number /* maximal longitude */;
						max_y: number /* maximal latitude */;
						cen_x: number /* longitude of center  */;
						cen_y: number /* latitude of center */;
					};
				}>;
			}>;
			drvrs: Partial<{
				[key: string]: Partial<{
					/* sequence number of driver */
					id: number /* ID */;
					n: string /* name */;
					c: string /* code */;
					pwd: string /* password for mobile authorization */;
					ej: string /* extentended JSON */;
					jp: {
						/* custom fields */
						[key: string]: String;
					};
					ds: string /* description */;
					p: string /* phone number */;
					r: number /* image aspect ratio */;
					ck: string /* check sum (CRC16) */;
					bu: number /* binded unit */;
					pu: number /* previous binded unit */;
					bt: number /* time of last binging/unbinding */;
					pos: {
						/* position */
						y: number /* latitude */;
						x: number /* longitude */;
					};
					infr: {
						/*parameters for analysis infringements of work and rest of drivers AETR */
						a: number /* current activity */;
						t: number /* the start time of this activity */;
						ud: number /* duration of uninterrupted driving before the current activity */;
						ur: number /* duration of uninterrupted rest before the current activity */;
						uil: number /* allowed duration of uninterrupted driving */;
						uim: number /* duration of uninterrupted driving to which the violation is infringement minor */;
						uis: number /* duration of uninterrupted driving to which the violation is infringement serious (above - very serious) */;
						uir: number /* duration of required rest */;
						ddt: number /* daily driving time before the current activity */;
						ddc: number /* allowed number of prolonged daily driving in this week */;
						ddil: number /* allowed duration of daily driving */;
						ddim: number /* allowed duration of daily driving (minor infringement ) */;
						ddis: number /* allowed duration of daily driving (serious infringement(above very serious)) */;
						wdt: number /* duration of weekly driving before the current activity */;
						wdil: number /* allowed duration of weekly driving */;
						wdim: number /* allowed duration of weekly driving (minor infringement) */;
						wdis: number /* allowed duration of weekly driving (serious infringement(above very serious)) */;
						twdt: number /* duration for two weeks of driving before the current activity */;
						twdil: number /* allowed duration for two weeks of driving */;
						twdim: number /* allowed duration for two weeks of driving (minor infringement) */;
						twdis: number /* allowed duration for two weeks of driving (serious infringement(above very serious)) */;
						drt: number /* duration of the previous daily rest */;
						drd: number /* duration of the required daily rest */;
						dril: number /* time before which daily rest should occure */;
						drim: number /* time before which an infringement is considered to be minor */;
						dris: number /* time before which an infringement is considered to be serious(above very serious) */;
						wrt: number /* duration of the previous weekly rest */;
						wrd: number /* duration of the required weekly rest */;
						wril: number /* time before which weekly rest should occure */;
						wrim: number /* time before which an infringement is considered to be minor */;
						wris: number /* time before which an infringement is considered to be serious(above very serious) */;
					};
				}>;
			}>;
			drvrsmax: number /* maximal count of drivers (-1 - unlimited) */;
		}>
	>;
}
