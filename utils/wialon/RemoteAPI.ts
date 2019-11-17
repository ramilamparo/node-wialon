import axios from "axios";
import FormData from "form-data";

import { TokenLoginResponse, WialonError, Params, Response, SVC } from ".";

export const defaultHost = "https://hst-api.wialon.com/wialon/ajax.html";

export abstract class RemoteAPI {
	public static buildUrl = <T extends SVC>(
		url: string,
		svc: T,
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

	public static execute = async <T extends SVC>(
		svc: T,
		params?: Params[T] | null,
		sid?: string | null,
		url: string = defaultHost
	): Promise<Response[T] | WialonError> => {
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
