import axios from "axios";
import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { Report } from "./report/Report";
import { Resource } from "./resource/Resource";
import { RemoteAPI } from "./RemoteAPI";
import type { TokenLoginParams, TokenLoginResponse } from "./token";
import type {
	CoreUseAuthHashResponse,
	CoreUseAuthHashParams,
	CoreDuplicateParams,
	CoreDuplicateResponse
} from "./core";

export interface AvlEvtsResponse<Data> {
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
			d: Data;
		}
	];
}

export class Wialon extends RemoteAPI {
	public static tokenLogin = async (
		params: TokenLoginParams,
		host?: string
	) => {
		const user = await RemoteAPI.execute<TokenLoginParams, TokenLoginResponse>(
			"token/login",
			params,
			null,
			host
		);
		const wialon = new Wialon(user.eid, { host, auth: user });
		return wialon;
	};

	public static useSession = (sessionId: string, host?: string) => new Wialon(sessionId, { host });

	public static useAuthHash = async (
		params: CoreUseAuthHashParams,
		host?: string
	) => {
		const user = await RemoteAPI.execute<
			CoreUseAuthHashParams,
			CoreUseAuthHashResponse
		>("core/use_auth_hash", params);
		return new Wialon(user.eid, { host, auth: user });
	};

	public duplicateSession = async (
		params?: Partial<CoreDuplicateParams> & { host?: string }
	) => {
		const combinedParams: CoreDuplicateParams = {
			operateAs: "",
			...params
		};
		const response = await RemoteAPI.execute<
			CoreDuplicateParams,
			CoreDuplicateResponse
		>("core/duplicate", combinedParams, this.sessionId);

		return new Wialon(response.eid, { host: params?.host, auth: response });
	};

	public execute = async <Params, Response>(svc: string, params: Params) => RemoteAPI.execute<Params, Response>(
			svc,
			params,
			this.sessionId,
			this.options.host
		);

	public avlEvts = async <Data = unknown>() => {
		const baseURL = new URL(this.options.host);
		return axios.post<AvlEvtsResponse<Data>>(
			`${baseURL.protocol}//${baseURL.host}/avl_evts?sid=${this.sessionId}`
		);
	};

	public get Unit() {
		return new Unit(this.sessionId, this.options);
	}

	public get Core() {
		return new Core(this.sessionId, this.options);
	}

	public get Messages() {
		return new Messages(this.sessionId, this.options);
	}

	public get Utils() {
		return new Utils(this.sessionId, this.options);
	}

	public get Item() {
		return new Item(this.sessionId, this.options);
	}

	public get Report() {
		return new Report(this.sessionId, this.options);
	}

	public get Resource() {
		return new Resource(this.sessionId, this.options);
	}
}
