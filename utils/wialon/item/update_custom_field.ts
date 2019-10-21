export interface Params {
	itemId: number;
	n: string;
	v: string;
}

export type Response = ({
	id: number;
	n: string;
	v: string;
})[];
