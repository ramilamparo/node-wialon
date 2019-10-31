import { RemoteAPIError } from "..";

export interface Params {
	token: string;
	operateAs?: string;
	fl?: number;
}

export interface Response extends RemoteAPIError {
	eid: string /* session ID */;
	gis_sid: string /* session ID for gis services */;
	host: string /* host */;
	hw_gw_ip: string /* hardware gateway ip */;
	au: string /* user name */;
	pi: number /* ping interval */;
	tm: number /* current time (UTC) */;
	wsdk_version: string /* sdk version */;
	user: {
		/* user from whose behalf you want to perform login */
		nm: string /* name  */;
		cls: number /* ID of superclass user */;
		id: number /* ID */;
		prp: {
			/* custom properties, for example: */
			dst: string /* daylight savings time */;
			language: string /* language (two-lettered code) */;
			msakey: string /* access key to mobile site */;
			pcal: string /* Iranian calendar */;
			tz: string /* time zone */;
			us_units: string /* US metrics (miles and gallons) */;
		};
		crt: number /* creator ID */;
		bact: number /* account ID */;
		fl: number /* user flags */;
		hm: string /* host mask */;
		uacl: number /* user access to himself */;
		mu: number /* Measurement system */;
		ct: number /* User creation date */;
		ftp: { [key: string]: any } /* FTP settings */;
		ld: number /* Last login date */;
		pfl: number /* Creators flag */;
		ap: {
			/* Two-factor authentication settings */
			type: number /* authentication type ( 0 - none, 1 - email, 2 - SMS ) */;
			phone: string /* Phone number */;
		};
		mapps: { [key: string]: any } /* Mobile apps list */;
		mappsmax: number /* Restrictions on mobile applications specified in the billing plan */;
	};
}
