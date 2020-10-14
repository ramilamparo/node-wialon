import { SVC } from "..";

export interface Params<T> {
	svc: SVC;
	params: T;
	flag: number;
}
