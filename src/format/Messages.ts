export interface MessageWithData {
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
	lc: number /* lbs message checksum */;
	rt: number /* message registration time (UTC) */;
}

export interface SMS {
	t: number /* message time (UTC) */;
	f: number /* flags: SMS messages has no flags, therefore 0 will be placed */;
	tp: "us" /* message type (us - SMS message) */;
	st: string /* text of message */;
	mp: string /* modem phone number */;
	p: {} /* parameters */;
}

export interface Command {
	t: number /* message time (UTC) */;
	f: number /* flags: messages with commands has no flags, therefore 0 will be placed */;
	tp: "ucr" /* message type (ucr - command) */;
	ca: string /* command name */;
	cn: string /* command type */;
	cp: string /* command parameters */;
	ui: number /* user ID */;
	ln: string /* link name */;
	lt: string /* link type */;
	et: number /* execution time */;
	p: {} /* parameters */;
}

export interface Event {
	t: number /* message time (UTC) */;
	f: number /* flags (see below) */;
	tp: "evt" /* message type (evt - event) */;
	et: string /* text of event */;
	x: number /* longitude */;
	y: number /* latitude */;
	p: {} /* parameters */;
}

export interface Notification {
	t: number /* message time (UTC) */;
	f: number /* flags: messages with notifications has no flags, therefore 0 will be placed */;
	tp: "xx" /* message type */;
	p: {} /* parameters */;
}

export interface BillingMessage {
	t: number /* message time (UTC) */;
	f: number /* flags: 0x1 - is set when message contains information about payment */;
	tp: "xx" /* message type */;
	p: {} /* parameters */;
}

export interface SMSForDriver {
	t: number /* message time (UTC) */;
	f: number /* flags: 0x1 - is set when message is sent */;
	tp: "xx" /* message type */;
	p: {
		/* parameters */
		phone: string /* phone number */;
		sms_text: string /* sms text */;
		driver_name: string /* driver name */;
		driver_id: number /* driver ID */;
	};
}

export interface Log {
	t: number /* message time (UTC) */;
	f: 4096 /* flags: 4096 - log messages */;
	tp: "xx" /* message type */;
	p: {
		/* parameters */
		user: string /* user name */;
		action: string /* action */;
		host: string /* host */;
		p1: string /* parameters */;
		[key: string]: string;
	};
}
