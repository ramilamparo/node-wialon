export namespace UnitGroupsDataFormat {
	/**
	 * General properties
	 * Flag - 0x00000001
	 */
	export interface GeneralProperties {
		/** name */
		nm: string;
		/** superclass ID: "avl_unit_group" */
		cls: number;
		/** group ID */
		id: number;
		/** array of group units */
		u: [number];
		/** current user access level for unit group */
		uacl: number;
	}

	/**
	 * Custom properties
	 * Flag - 0x00000002
	 * You can store any data you need in custom properties.
	 */
	export interface CustomProperties {
		/** custom properties */
		prp: { [key: string]: string };
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
	 * Unit group image
	 * Flag - 0x00000010
	 */
	export interface UnitGroupImage {
		/** image changes counter */
		ugi: number;
	}

	/**
	 * GUID
	 * Flag - 0x00000040
	 */
	export interface GUID {
		/** group GUID */
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
}
