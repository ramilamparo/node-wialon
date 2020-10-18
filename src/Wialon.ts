import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { Report } from "./report/Report";
import { RemoteAPI, defaultHost } from "./RemoteAPI";
import type { TokenLoginParams, TokenLoginResponse } from "./token";
import type { UseAuthHashResponse, UseAuthHashParams } from "./core";

export class Wialon extends RemoteAPI {
	public static login = async (
		params: TokenLoginParams,
		host: string = defaultHost
	) => {
		const user = await RemoteAPI.execute<TokenLoginParams, TokenLoginResponse>(
			"token/login",
			params,
			null,
			host
		);
		const w = new Wialon(user, host);
		return w;
	};

	public static useAuthHash = async (
		params: UseAuthHashParams,
		host: string = defaultHost
	) => {
		const user = await RemoteAPI.execute<
			UseAuthHashParams,
			UseAuthHashResponse
		>("core/use_auth_hash", params);
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

	public get Report() {
		return new Report(this.user, this.host);
	}
}
