export interface GeneralProperties {
	/* measure units: 0 - si, 1 - us, 2 - imperial, 3 - metric with gallons */
	mu: number;
	/* name */
	nm: string;
	/* superclass ID: "avl_unit" */
	cls: number;
	/* unit ID */
	id: number;
	/* current user access level for unit */
	uacl: number;
}

export interface CustomProperties {
	prp: {
		/* rotate images: "1" - yes, "0" - no */
		img_rot: string;
		/* sensor ID which will be shown in monitoring panel */
		monitoring_sensor_id: string;
		/* sensor - source of motion state ID */
		motion_state_sensor_id: string;
		/* sensor - source of track colour */
		sensors_colors_id: string;
		/* use sensor color in monitoring panel: "1" - yes, "0" - no */
		use_sensor_color: string;
		/* used one of parameters to choose source of color for track */
		/* table of colors for track by sensor */
		sensors_colors: string;
		/* color for track */
		solid_colors: string;
		/* table of colors for track by speed */
		speed_colors: string;
		/* used for storage last used colors */
		/* table of colors for track by sensor */
		track_sensor: string;
		/* color for track */
		track_solid: string;
		/* table of colors for track by speed */
		track_speed: string;
		/* sensor ID which shows battery status */
		monitoring_battery_id: string;
		[key: string]: string;
	};
	/* creation time */
	ct: number;
}

export interface Billing {
	/* creator ID */
	crt: number;
	/* account ID */
	bact: number;
}

export interface CustomFields {
	flds: {
		/* custom fields */
		[key: string]: {
			/* sequence number */
			id: number /* ID */;
			n: string /* name */;
			v: string /* value */;
		};
	};
	fldsmax: number /* maximal count of custom fields (-1 - unlimited) */;
}

export interface UnitImage {
	uri: string /* image link */;
	ugi: number /* image changes counter */;
}


export interface Message {}

export interface GUID {
	gd: string /* unit GUID */;
}

export interface AdministrativeFields {
	aflds: {
		/* administrative fields */

		[key: string]: {
			/* sequence number */
			id: number /* ID */;
			n: string /* name */;
			v: string /* value */;
		};
	};
	afldsmax: number /* maximal count of administrative fields (-1 - unlimited) */;
}

export interface AdvancedProperties {
	uid: string /* unique ID (hardware) */;
	uid2: string /* second unique ID (hardware) */;
	hw: number /* hardware type */;
	ph: string /* phone number */;
	ph2: string /* second phone number */;
	psw: string /* password */;
	act: boolean /* unit deactivated - 0, activated - 1 */;
	dactt: number /* deactivation time UNIX, 0 - unit is activated */;
}

export interface AvailableCommands {
	cmds: [
		/* array of commands */
		{
			n: string /* name */;
			a: number /* access level (access rights that user must have to execute current command) */;
			t: string /* link type */;
			c: string /* command type */;
		}
	];
}

export interface LastMessagePosition {
	pos: {
		/* last known position */
		t: number /* time (UTC) */;
		y: number /* latitude */;
		x: number /* longitude */;
		z: number /* altitude */;
		s: number /* speed */;
		c: number /* course */;
		sc: number /* satellites count */;
	};
	lmsg: {
		/* last known message */
	};
}

export interface Sensors {
	sens: {
		/* sensors */
		[key: string]: {
			/* sequence number of sensor */
			id: number /* ID */;
			n: string /* name */;
			t: string /* type */;
			d: string /* description */;
			m: string /* metrics */;
			p: string /* parameter */;
			f: number /* sensor flags */;
			c: string /* configuration */;
			vt: number /* validation type */;
			vs: number /* validation sensor ID */;
			tbl: [
				/* calculation table */
				{
					/* parameters */
					x: number;
					a: number;
					b: number;
				}
			];
		};
	};
	sens_max: number /*  maximal count of sensors (-1 - unlimited) */;
}

export interface Counters {
	cfl: number /* calculation flags */;
	cnm: number /* mileage counter, km or miles */;
	cneh: number /* engine hours counter, h */;
	cnkb: number /* GPRS traffic counter, KB */;
}

export interface Maintenance {
	si: {
		/* service intervals */
		[key: string]: {
			/* sequence number of service interval */
			id: number /* ID */;
			n: string /* name */;
			t: string /* description */;
			im: number /* mileage interval */;
			it: number /* days interval */;
			ie: number /* engine hours interval */;
			pm: number /* last service for mileage interval, km */;
			pt: number /* last service for days interval, sec (UTC) */;
			pe: number /* last service for engine hours interval, h */;
			c: number /* done times */;
		};
	};
	simax: number /* maximal count of service intervals (-1 - unlimited) */;
}

export interface TripDetectorAndFuelConsumption {
	rtd: {
		/* trip detector */
		type: number /* type of movement detection */;
		gpsCorrection: number /* allow GPS correction: 0 - no, 1 - yes */;
		minSat: number /* min satellites count */;
		minMovingSpeed: number /* min moving speed, km/h */;
		minStayTime: number /* min parking time, seconds */;
		maxMessagesDistance: number /* max distance between messages, meters */;
		minTripTime: number /* min trip time, seconds */;
		minTripDistance: number /* min trip distance, meters */;
	};
	rfc: {
		/* fuel consumption */
		calcTypes: number /* type of calculation */;
		fuelLevelParams: {
			/* detection of fuel fillings/thefts */
			flags: number /* flags of fillings and thefts */;
			ignoreStayTimeout: number /* ignore the messages after the start of motion, sec */;
			minFillingVolume: number /* minimum fuel filling volume, litres */;
			minTheftTimeout: number /* minimum stay timeout to detect fuel theft, sec */;
			minTheftVolume: number /* minimum fuel theft volume, litres */;
			filterQuality: number /* filter quality (0..255) */;
			fillingsJoinInterval: number /* timeout to separate consecutive fillings, sec */;
			theftsJoinInterval: number /* timeout to separate consecutive thefts, sec */;
			extraFillingTimeout: number /* timeout to detect final filling volume, sec */;
		};
		fuelConsMath: {
			/* consumption math */
			idling: number /* idling, litres per hour */;
			urban: number /* urban cycle, litres per 100 km */;
			suburban: number /* suburban cycle, litres per 100 km */;
		};
		fuelConsRates: {
			/* consumption by rates */
			consSummer: number /* summer consumption, litres per 100 km */;
			consWinter: number /* winter consumption, litres per 100 km */;
			winterMonthFrom: number /* winter from (month: 0-11) */;
			winterDayFrom: number /* winter from (day 1-31) */;
			winterMonthTo: number /* winter to (month 0-11) */;
			winterDayTo: number /* winter to (day 1-31) */;
		};
		fuelConsImpulse: {
			/* impulse fuel consumption sensors */
			maxImpulses: number /* max impulses */;
			skipZero: number /* skip first zero value */;
		};
	};
}

export interface Commands {
	cml: {
		/* list of commands */
		[key: string]: {
			/* sequence number of command */
			id: number /* ID */;
			n: string /* name */;
			c: string /* type */;
			l: string /* link type */;
			p: string /* parameters */;
			a: number /* access level (access rights that user must have to execute current command) */;
			f: number /* phone number flags: 0-any (primary, then secondary), 0x1-primary, 0x2-secondary */;
		};
	};
	cml_max: number /* maximal count of commands (-1 - unlimited)  */;
}

export interface MessageParameters {
	prms: {
		/* list of message parameters */
		[key: string]: {
			/* parameter name */
			v: any /* parameter value */;
			ct: number /* time of last value change */;
			at: number /* time of last message with such parameter */;
		};
	};
}

export interface Connection {
	item: {
		netconn: boolean;
	};
}

export interface Position {
	pos: {
		/* last known position */
		t: number /* time (UTC) */;
		y: number /* latitude */;
		x: number /* longitude */;
		z: number /* altitude */;
		s: number /* speed */;
		c: number /* course */;
		sc: number /* satellites count */;
	};
}

export interface ProfileFields {
	pflds: {
		number: {
			/* field ID */
			id: number /* field ID */;
			n: string /* field name */;
			v: string /* field value */;
		};
	};
}
