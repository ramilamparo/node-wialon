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
import { SVC } from "./types";

interface ExecuteMethod {
	<T extends SVC, Response>(svc: T, params: null): Promise<Response>;
	<Response>(svc: string, params: null): Promise<Response>;
	<T extends SVC, Params, Response>(svc: T, params: Params): Response;
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

	public static useSession = (session: string, host: string = defaultHost) => {
		return new Wialon({ eid: session }, host);
	};

	public execute = async <T extends SVC, Params, Response>(
		svc: T | string,
		params: Params
	) => {
		return RemoteAPI.execute<T, Params, Response>(
			svc,
			params,
			this.user.eid,
			this.host
		);
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
