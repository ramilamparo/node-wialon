import {
	Core,
	Messages,
	Utils,
	Unit,
	Item,
	RemoteAPI,
	defaultHost,
	TokenLoginParams
} from "./";
import { Params, SVC } from "./types";

interface ExecuteMethod {
	<T extends SVC, Response>(svc: T, params: Params[T]): Promise<Response>;
	<Params, Response>(svc: string, params: Params): Response;
}

export class Wialon extends RemoteAPI {
	public static login = async (
		params: TokenLoginParams,
		host: string = defaultHost
	) => {
		const user = await RemoteAPI.execute("token/login", params, null, host);
		const w = new Wialon(user, host);
		return w;
	};

	public execute: ExecuteMethod = async <T extends SVC, P>(
		svc: T | string,
		params: Params[T] | P
	) => {
		return RemoteAPI.execute(svc, params, this.user.eid, this.host);
	};

	public get Unit() {
		return new Unit(this.user, this.host);
	}

	public get Core() {
		return new Core(this.user, this.host);
	}

	public get Messages() {
		return new Messages(this.user, this.host);
	}

	public get Utils() {
		return new Utils(this.user, this.host);
	}

	public get Item() {
		return new Item(this.user, this.host);
	}
}
