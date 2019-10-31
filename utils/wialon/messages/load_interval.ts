import { RemoteAPIError } from "..";

export interface Params {
	itemId: number;
	timeFrom: number;
	timeTo: number;
	flags: number;
	flagsMask: number;
	loadCount: number;
}

export interface Response extends RemoteAPIError {
	t: number /* message time (UTC) */;
	f: number /* flags (see below)*/;
	tp: "ud" /* message type (ud - message with data) */;
	pos: {
		/* position */
		y: number /* latitude */;
		x: number /* longitude */;
		z: number /* altitude */;
		s: number /* speed */;
		c: number /* course */;
		sc: number /* satellites count */;
	};
	i: number /* input data */;
	o: number /* output data */;
	p: {
		/* parameters */
		[key: string]: number;
	};
}
