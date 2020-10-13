import axios from "axios";
import FormData from "form-data";

import { TokenLoginResponse, WialonError, Params, Response, SVC } from ".";

export const defaultHost = "https://hst-api.wialon.com/wialon/ajax.html";

interface ExecuteMethod {
	<T extends SVC>(
		svc: T,
		params?: Params[T] | null,
		sid?: string | null,
		url?: string
	): Promise<Response[T]>;
	<Response>(
		svc: string,
		params?: any,
		sid?: string | null,
		url?: string
	): Promise<Response>;
	<Params, Response>(
		svc: string,
		params?: Params,
		sid?: string | null,
		url?: string
	): Promise<Response>;
}

export abstract class RemoteAPI {
	public static buildUrl = <T extends SVC>(
		url: string,
		svc: T | string,
		params?: Params[T] | null,
		sid?: string
	) => {
		let composedUrl = url;
		if (svc || params || sid) {
			composedUrl += "?";
			if (svc) {
				composedUrl += `svc=${svc}`;
			}
			if (params) {
				composedUrl += `&params=${JSON.stringify(params)}`;
			}
			if (sid) {
				composedUrl += `&sid=${sid}`;
			}
		}
		return composedUrl;
	};

	public static execute: ExecuteMethod = async <T extends SVC>(
		svc: T | string,
		params?: Params[T] | null | any,
		sid?: string | null,
		url: string = defaultHost
	): Promise<Response[T]> => {
		const formData = new FormData();
		if (params) {
			formData.append("params", JSON.stringify(params));
		}
		if (sid) {
			formData.append("sid", sid);
		}

		const res = await axios.post<Response[T]>(
			RemoteAPI.buildUrl(url, svc),
			formData,
			{
				headers: { ...formData.getHeaders() },
				timeout: 0
			}
		);

		if (res.data.error) {
			throw new WialonError(res.data.error);
		}

		return res.data;
	};

	protected constructor(
		public user: TokenLoginResponse,
		public host: string = defaultHost
	) {}
}

RemoteAPI.execute<null, {}>("");
