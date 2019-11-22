export interface Params {
	itemId: number;
	id: number;
	callMode: string;
	n?: string;
	t?: string;
	im?: number;
	it?: number;
	ie?: number;
	pm?: number;
	pt?: number;
	pe?: number;
	c?: number;
}

export type Response = [
	number /* service interval ID */,
	{
		id: number /* service interval ID */;
		n: string /* name */;
		t: string /* description */;
		im: number /* mileage interval */;
		it: number /* days interval */;
		ie: number /* engine hours interval */;
		pm: number /* last service for mileage interval, km */;
		pt: number /* last service for days interval, sec (UTC) */;
		pe: number /* last service for engine hours interval, h */;
		c: number /* done times */;
	} | null
];
