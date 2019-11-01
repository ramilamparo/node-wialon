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

export class Wialon extends RemoteAPI {
	public static login = async (
		params: TokenLoginParams,
		host: string = defaultHost
	) => {
		const user = await RemoteAPI.execute("token/login", params, null, host);
		const w = new Wialon(user, host);
		return w;
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
