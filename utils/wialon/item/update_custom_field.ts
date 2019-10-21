export interface Params {
	itemId: number;
	n: string;
	v: string;
}

export type Response = Array<{
	id: number;
	n: string;
	v: string;
}>;
