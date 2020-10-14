import type { SVC } from "../types";

export interface Params<T> {
	svc: SVC;
	params: T;
	flag: number;
}
