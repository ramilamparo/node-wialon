export interface Params {
	itemId: number;
	n: string;
	v: string;
}

export type Response = [
	number,
	{
		id: number;
		n: string;
		v: string;
	}
];
