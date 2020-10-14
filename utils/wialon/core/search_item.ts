export interface Params {
	id: number;
	flags: number;
}

export interface Response<T> {
	flags: number;
	item: Partial<T>;
}
