export interface Params {
	itemId: number;
	commandName: string;
	linkType: "" | "tcp" | "udp" | "gsm" | "vrt";
	param: string;
	timeout: number;
	flags: number;
}

export interface Response {}
