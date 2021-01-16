export namespace ResourcesDataFormat {
	/**
	 * General properties
	 * Flag - 0x00000001
	 */
	export interface GeneralProperties {
		/** name */
		nm: string;
		/** superclass ID: "avl_resource" */
		cls: number;
		/** resource ID */
		id: number;
		/** measure units: 0 - si, 1 - us, 2 - imperial, 3 - metric with gallons */
		mu: number;
		/** current user access level for resource */
		uacl: number;
	}
	/**
	 * Custom properties
	 * Flag - 0x00000002
	 * You can store any resource data you need in custom properties.
	 */
	export interface CustomProperties {
		/** custom properties */
		prp: {
			/** list of e-mails for jobs */
			emails: string[];
			/** list of e-mail for notifications */
			nf_rep_emails: string[];
			/** list of phone numbers for job "Send fuel information by e-mail or SMS" */
			phones: string[];
			[key: string]: string | string[];
		};
		/** FTP settings */
		ftp: {
			/** host */
			hs: string;
			/** login */
			lg: string;
			/** directory path */
			pt: string;
			/** FTP settings validity: 1-yes, 0-no */
			ch: number;
			/** use wialon hosting FTP: 1 - yes, 0 - no */
			tp: number;
			/** is wialon hosting FTP available: 1 - yes, 0 - no */
			fl: number;
		};
	}

	/**
	 * Billing
	 * Flag - 0x00000004
	 */
	export interface Billing {
		/** creator ID */
		crt: number;
		/** account ID */
		bact: number;
		/** parrent account ID */
		bpact: number;
	}

	/**
	 * Custom fields
	 * Flag - 0x00000008
	 */

	export interface CustomFields {
		/** custom fields */
		flds: {
			/** sequence number */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** value */
				v: string;
			};
		};
		/** maximal count of custom fields (-1 - unlimited) */
		fldsmax: number;
	}

	/**
	 * GUID
	 * Flag - 0x00000040
	 */
	export interface GUID {
		/** resource GUID */
		gd: string;
	}

	/**
	 * Administrative fields
	 * Flag - 0x00000080
	 */
	export interface AdministrativeFields {
		/** administrative fields */
		aflds: {
			/** sequence number */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** value */
				v: string;
			};
		};
		/** maximal count of administrative fields (-1 - unlimited) */
		afldsmax: number;
	}

	/**
	 * Drivers
	 * Flag - 0x00000100
	 */
	export interface Drivers {
		drvrs: {
			/** sequence number of driver */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** code */
				c: string;
				/** password for mobile authorization */
				pwd: string;
				/** extentended JSON */
				ej: string;
				/** custom fields */
				jp: {
					/** name: value */
					[key: string]: string;
				};
				/** description */
				ds: string;
				/** phone number */
				p: string;
				/** image aspect ratio */
				r: number;
				/** check sum (CRC16) */
				ck: string;
				/** binded unit */
				bu: number;
				/** previous binded unit */
				pu: number;
				/** time of last binging/unbinding */
				bt: number;
				/** position */
				pos: {
					/** latitude */
					y: number;
					/** numbeeritude */
					x: number;
				};
				/** parameters for analysis infringements of work and rest of drivers AETR */
				infr: {
					/** current activity */
					a: number;
					/** the start time of this activity */
					t: number;
					/** duration of uninterrupted driving before the current activity */
					ud: number;
					/** duration of uninterrupted rest before the current activity */
					ur: number;
					/** allowed duration of uninterrupted driving */
					uil: number;
					/** duration of uninterrupted driving to which the violation is infringement minor */
					uim: number;
					/** duration of uninterrupted driving to which the violation is infringement serious (above - very serious) */
					uis: number;
					/** duration of required rest */
					uir: number;
					/** daily driving time before the current activity */
					ddt: number;
					/** allowed number of pronumbeered daily driving in this week */
					ddc: number;
					/** allowed duration of daily driving */
					ddil: number;
					/** allowed duration of daily driving (minor infringement ) */
					ddim: number;
					/** allowed duration of daily driving (serious infringement(above very serious)) */
					ddis: number;
					/** duration of weekly driving before the current activity */
					wdt: number;
					/** allowed duration of weekly driving */
					wdil: number;
					/** allowed duration of weekly driving (minor infringement) */
					wdim: number;
					/** allowed duration of weekly driving (serious infringement(above very serious)) */
					wdis: number;
					/** duration for two weeks of driving before the current activity */
					twdt: number;
					/** allowed duration for two weeks of driving */
					twdil: number;
					/** allowed duration for two weeks of driving (minor infringement) */
					twdim: number;
					/** allowed duration for two weeks of driving (serious infringement(above very serious)) */
					twdis: number;
					/** duration of the previous daily rest */
					drt: number;
					/** duration of the required daily rest */
					drd: number;
					/** time before which daily rest should occure */
					dril: number;
					/** time before which an infringement is considered to be minor */
					drim: number;
					/** time before which an infringement is considered to be serious(above very serious) */
					dris: number;
					/** duration of the previous weekly rest */
					wrt: number;
					/** duration of the required weekly rest */
					wrd: number;
					/** time before which weekly rest should occure */
					wril: number;
					/** time before which an infringement is considered to be minor */
					wrim: number;
					/** time before which an infringement is considered to be serious(above very serious) */
					wris: number;
				};
			};
		};
		/** maximal count of drivers (-1 - unlimited) */
		drvrsmax: number;
	}

	/**
	 * Jobs
	 * Flag - 0x00000200
	 */
	export interface Jobs {
		ujb: {
			/** sequence number of job */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** description */
				d: string;
				/** maximal allowed executions count */
				m: number;
				/** state */
				st: {
					/** active/inactive */
					e: number;
					/** executions count */
					c: number;
					/** last execution time */
					l: number;
				};
				/** action type */
				act: string;
			};
		};
		/** maximal count of jobs (-1 - unlimited) */
		ujbmax: number;
	}

	/**
	 * Types of actions are described in the chapter Jobs: detailed information.
	 * Notifications
	 * Flag - 0x00000400
	 */
	export interface Notifications {
		unf: {
			/** sequence number of notification */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** activation time */
				ta: number;
				/** deactivation time */
				td: number;
				/** maximal alarms count (0 - unlimited) */
				ma: number;
				/** notification types */
				fl: number;
				/** alarms count */
				ac: number;
				/** array of units IDs */
				un: number[];
				/** actions list */
				act: string[];
				/** type of control */
				trg: string;
				/** check sum of binary view of notification */
				crc: number;
			};
		};
		/** maximal count of notifications (-1 - unlimited) */
		unfmax: number;
	}

	/**
	 * Action types, control types and notification flags are described in the chapter Notifications: detailed information.
	 * POIs
	 * Flag - 0x00000800
	 */
	export interface POIs {
		poi: {
			/** sequence number of POI */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** latitude */
				y: number;
				/** numbeeritude */
				x: number;
				/** image aspect ratio */
				t: number;
				/** check sum of image (CRC16) */
				i: string;
				/** check sum of POI (CRC16) */
				e: string;
			};
		};
		/** maximal count of POIs (-1 - unlimited) */
		poimax: number;
	}

	/**
	 * Geofences
	 * Flag - 0x00001000
	 */
	export interface Geofences {
		zl: {
			/** sequence number of geofence */
			[key: string]: {
				/** name */
				n: string;
				/** description */
				d: string;
				/** ID */
				id: number;
				/** flags */
				f: number;
				/** type: 1 - line, 2 - polygon, 3 - circle */
				t: 1 | 2 | 3;
				/** check sum (CRC16) */
				e: string;
				/** configuration for rendering geofences */
				b: {
					/** minimal numbeeritude */
					min_x: number;
					/** minimal latitude */
					min_y: number;
					/** maximal numbeeritude */
					max_x: number;
					/** maximal latitude */
					max_y: number;
					/** numbeeritude of center  */
					cen_x: number;
					/** latitude of center */
					cen_y: number;
				};
			};
		};
		/** maximal count of geofences (-1 - unlimited) */
		zlmax: number;
	}

	/**
	 * Geofence flags are described in the chapter Geofences: detailed information.
	 * Report templates
	 * Flag - 0x00002000
	 */
	export interface ReportTemplates {
		rep: {
			/** sequence number of template */
			[key: string]: {
				/** ID */
				id: number;
				/** name */
				n: string;
				/** template type */
				ct: string;
				/** check sum (CRC16) */
				c: string;
			};
		};
		/** maximal count of templates (-1 - unlimited) */
		repmax: number;
	}

	/**
	 * Types of templates are described in the chapter Get templates data.
	 * List of auto attachable units for drivers
	 * Flag - 0x00004000
	 */
	export interface DriverAutoAttachablUnits {
		/** array IDs of auto attachable units */
		drvrun: number[];
	}

	/**
	 * Driver groups
	 * Flag - 0x00008000
	 */
	export interface DriverGroups {
		/** driver groups */
		drvrsgr: {
			/** sequence number of group */
			[key: string]: {
				/** group ID */
				id: number;
				/** name */
				n: string;
				/** description */
				d: string;
				/** array of drivers IDs */
				drs: number[];
			};
		};
		/** maximal count of driver groups (-1 - unlimited) */
		drvrsgrmax: number;
	}

	/**
	 * Trailers
	 * Flag - 0x00010000
	 */
	export interface Trailers {
		/** trailers */
		trlrs: {
			/** sequence number of trailer */
			[key: string]: {
				/** trailer ID */
				id: number;
				/** name */
				n: string;
				/** code */
				c: string;
				/** extentended JSON */
				ej: string;
				/** custom fields */
				jp: {
					/** name: value */
					[key: string]: string;
				};
				/** description */
				ds: string;
				/** phone number */
				p: string;
				/** image aspect ratio */
				r: number;
				/** check sum of image */
				ck: string;
				/** binded unit */
				bu: number;
				/** previous binded unit */
				pu: number;
				/** time of last binding/unbinding */
				bt: number;
				/** position */
				pos: {
					/** latitude */
					y: number;
					/** numbeeritude */
					x: number;
				};
			};
		};
		/** maximal count of trailers (-1 - unlimited) */
		trlrsmax: number;
	}

	/**
	 * Trailer groups
	 * Flag - 0x00020000
	 */
	export interface TrailerGroups {
		/** trailer groups */
		trlrsgr: {
			/** sequence number of group */
			[key: string]: {
				/** group ID */
				id: number;
				/** name */
				n: string;
				/** description */
				d: string;
				/** array of trailers IDs */
				drs: number[];
			};
		};
		/** maximal count of trailer groups (-1 - unlimited) */
		trlrsgrmax: number;
	}

	/**
	 * List of auto attachable units for trailers
	 * Flag - 0x00040000
	 */
	export interface TrailerAutoAttachbleUnits {
		/** array IDs of auto attachable units */
		trlrun: number[];
	}

	/**
	 * Orders
	 * Flag - 0x00080000
	 */
	export interface Orders {
		orders: {
			/** order number, the same as in "id" param */
			[key: string]: {
				/** order id within resource */
				id: number;
				/** order name */
				n: string;
				/** user-defined object content */
				p: {
					[key: string]: any;
				};
				/** order flags: 1 - order would be marked as completed if there were at least one message within order area with zero speed in it */
				f: boolean;
				/** lower bound of order completion time */
				tf: number;
				/** upper bound of order completion time  */
				tt: number;
				/** unique id (is used as unique key in order history) */
				uid: number;
				/** order point radius */
				r: number;
				/** order point latitude */
				y: number;
				/** order point longitude */
				x: number;
				/** unit id */
				u: number;
				/** order status: 0 - inactive (no unit assigned), 1 - active (unit assigned), 2 - completed in time, 3 - completed overdue, 4 - cancelled (not used) */
				s: number;
				/** last status modification time */
				st: number;
			};
		};
	}

	/**
	 * Geofences groups
	 * Flag - 0x00100000
	 */
	export interface GeofenceGroups {
		/** geofences groups */
		zg: {
			/** sequence number of group */
			[key: string]: {
				/** group ID */
				id: number;
				/** name */
				n: string;
				/** description */
				d: string;
				/** array of geofences IDs */
				drs: number[];
			};
		};
		/** maximal count of geofences groups (-1 - unlimited) */
		zgmax: number;
	}

	/**	Tags (passengers)
	 * Flag - 0x00200000
	 */
	export interface Tags {
		tags: {
			[key: string]: {
				/** tag id */
				id: number;
				/** tag name */
				n: string;
				/** tag code */
				c: string;
				/** custom fields, key:value */
				jp: { [key: string]: string };
				/** image aspect ratio */
				r: number;
				/** check sum (CRC16) */
				ck: string;
				/** binded unit */
				bu: number;
				/** previous binded unit */
				pu: number;
				/** last binding/unbinding time */
				bt: number;
				/** time zone */
				tz: number;
				/** automatic time unbinding  */
				art: number;
				/* position */
				pos: {
					/** latitude */
					y: number;
					/** longitude */
					x: number;
				};
			};
		};
		tagsmax: number /* maximum number of tags */;
	}

	/**
	 * Automatic binding list of units (for tags)
	 *	Flag - 0x00400000
	 */
	export interface AutomaticBindingListOfUnits {
		/** array of units ID's for automatic binding */
		tagrun: number[];
	}

	/**
	 * Tags groups(passengers)
	 * Flag - 0x00800000
	 */
	export interface TagGroups {
		tagsgr: {
			[key: string]: {
				/** group ID */
				id: number;
				/** group name */
				n: string;
				/** description */
				d: string;
				/** tags ID's array */
				tgs: number[];
			};
		};
		/** maximum number of groups */
		tagsgrmax: -1;
	}
}
