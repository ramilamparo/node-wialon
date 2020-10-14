import { TokenLoginResponse, Params, Response } from ".";
export declare const defaultHost = "https://hst-api.wialon.com/wialon/ajax.html";
export declare abstract class RemoteAPI {
    user: TokenLoginResponse;
    host: string;
    static buildUrl: <T extends string>(url: string, svc: T, params?: Params[T] | null | undefined, sid?: string | undefined) => string;
    static execute: <T extends string>(svc: T, params?: Params[T] | null | undefined, sid?: string | null | undefined, url?: string) => Promise<Response[T]>;
    protected constructor(user: TokenLoginResponse, host?: string);
}
