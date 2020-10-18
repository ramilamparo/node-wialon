import axios from "axios";
import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { Report } from "./report/Report";
import { RemoteAPI } from "./RemoteAPI";
import type { TokenLoginParams, TokenLoginResponse } from "./token";
import type {
	CoreUseAuthHashResponse,
	CoreUseAuthHashParams,
	CoreDuplicateParams,
	CoreDuplicateResponse,
} from "./core";

export interface AvlEvtsResponse {
	/** server time */
	tm: number;
	/** events */
	events: [
		{
			/** item ID */
			i: number;
			/** event type: m - message, u - update, d - delete */
			t: string;
			/** description of event, depends on event type */
			d: any;
		}
	];
}

export class Wialon extends RemoteAPI {
	public static tokenlogin = async (
		params: TokenLoginParams,
		host?: string
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

	public static useSession = async (sessionId: string, host?: string) => {
		return new Wialon({ eid: sessionId }, host);
	};

	public static useAuthHash = async (
		params: CoreUseAuthHashParams,
		host?: string
	) => {
		const user = await RemoteAPI.execute<
			CoreUseAuthHashParams,
			CoreUseAuthHashResponse
		>("core/use_auth_hash", params);
		const w = new Wialon(user, host);
		return w;
	};

	public duplicateSession = async (
		params?: Partial<CoreDuplicateParams> & { host?: string }
	) => {
		const combinedParams: CoreDuplicateParams = {
			operateAs: "",
			...params,
		};
		const response = await RemoteAPI.execute<
			CoreDuplicateParams,
			CoreDuplicateResponse
		>("core/duplicate", combinedParams, this.sessionId);

		return new Wialon(response, params?.host);
	};

	public avlEvts = async () => {
		return axios.post(`${this.host}/avl_evts?sid=${this.auth.eid}`);
	};

	public get Unit() {
		return new Unit(this.auth, this.host);
	}

	public get Core() {
		return new Core(this.auth, this.host);
	}

	public get Messages() {
		return new Messages(this.auth, this.host);
	}

	public get Utils() {
		return new Utils(this.auth, this.host);
	}

	public get Item() {
		return new Item(this.auth, this.host);
	}

	public get Report() {
		return new Report(this.auth, this.host);
	}
}
