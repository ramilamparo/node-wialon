import type { SVC } from "./types";
import type { TokenLoginResponse } from "./token";
export declare const defaultHost = "https://hst-api.wialon.com/wialon/ajax.html";
interface ExecuteMethod {
    <Response = any>(svc: string, params?: null, sid?: string | null, url?: string): Promise<Response>;
    <T extends SVC, Response = any>(svc: T, params?: null, sid?: string | null, url?: string): Promise<Response>;
    <Params = any, Response = any>(svc: string, params: Params, sid?: string | null, url?: string): Promise<Response>;
    <T extends SVC, Params = any, Response = any>(svc: T, params?: Params, sid?: string | null, url?: string): Promise<Response>;
}
export interface RemoteAPIAuth {
    eid: TokenLoginResponse["eid"];
    user?: {
        id: TokenLoginResponse["user"]["id"];
    };
}
export declare abstract class RemoteAPI {
    auth: RemoteAPIAuth;
    host: string;
    static buildUrl: <T extends SVC, Params>(url: string, svc: string | T, params?: Params | undefined, sid?: string | undefined) => string;
    static execute: ExecuteMethod;
    protected constructor(auth: RemoteAPIAuth, host?: string);
    get sessionId(): string;
}
export {};
