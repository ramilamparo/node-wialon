export namespace MessagesDataFormat {
	export interface MessageWithData {
		/** message time (UTC) */
		t: number;
		/** flags (see below) */
		f: number;
		/** message type (ud - message with data) */
		tp: "ud";
		/** position */
		pos: {
			/** latitude */
			y: number;
			/** longitude */
			x: number;
			/** altitude */
			z: number;
			/** speed */
			s: number;
			/** course */
			c: number;
			/** satellites count */
			sc: number;
		};
		/** input data */
		i: number;
		/** output data */
		o: number;
		/** parameters */
		p: {
			[key: string]: number;
		};
		/** lbs message checksum */
		lc: number;
		/** message registration time (UTC) */
		rt: number;
	}

	export interface SMS {
		/** message time (UTC) */
		t: number;
		/** flags: SMS messages has no flags, therefore 0 will be placed */
		f: number;
		/** message type (us - SMS message) */
		tp: "us";
		/** text of message */
		st: string;
		/** modem phone number */
		mp: string;
		/** parameters */
		p: {};
	}

	export interface Command {
		/** message time (UTC) */
		t: number;
		/** flags: messages with commands has no flags, therefore 0 will be placed */
		f: number;
		/** message type (ucr - command) */
		tp: "ucr";
		/** command name */
		ca: string;
		/** command type */
		cn: string;
		/** command parameters */
		cp: string;
		/** user ID */
		ui: number;
		/** link name */
		ln: string;
		/** link type */
		lt: string;
		/** execution time */
		et: number;
		/** parameters */
		p: {};
	}

	export interface Event {
		/** message time (UTC) */
		t: number;
		/** flags (see below) */
		f: number;
		/** message type (evt - event) */
		tp: "evt";
		/** text of event */
		et: string;
		/** longitude */
		x: number;
		/** latitude */
		y: number;
		/** parameters */
		p: {};
	}

	export interface Notification {
		/** message time (UTC) */
		t: number;
		/** flags: messages with notifications has no flags, therefore 0 will be placed */
		f: number;
		/** message type */
		tp: "xx";
		/** parameters */
		p: {};
	}

	export interface BillingMessage {
		/** message time (UTC) */
		t: number;
		/** flags: 0x1 - is set when message contains information about payment */
		f: number;
		/** message type */
		tp: "xx";
		/** parameters */
		p: {};
	}

	export interface SMSForDriver {
		/** message time (UTC) */
		t: number;
		/** flags: 0x1 - is set when message is sent */
		f: number;
		/** message type */
		tp: "xx";
		/** parameters */
		p: {
			/** phone number */
			phone: string;
			/** sms text */
			sms_text: string;
			/** driver name */
			driver_name: string;
			/** driver ID */
			driver_id: number;
		};
	}

	export interface Log {
		/** message time (UTC) */
		t: number;
		/** flags: 4096 - log messages */
		f: 4096;
		/** message type */
		tp: "xx";
		/** parameters */
		p: {
			/** user name */
			user: string;
			/** action */
			action: string;
			/** host */
			host: string;
			/** parameters */
			p1: string;
			[key: string]: string;
		};
	}
}
