import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { RemoteAPI } from "./RemoteAPI";
import { TokenLoginParams } from "./token";
import { SVC } from "./types";
interface ExecuteMethod {
    <T extends SVC, Response>(svc: T, params: null): Promise<Response>;
    <Response>(svc: string, params: null): Promise<Response>;
    <T extends SVC, Params, Response>(svc: T, params: Params): Response;
    <Params, Response>(svc: string, params: Params): Response;
    <T extends SVC, Params, Response>(svc: T, params: Params): Response;
    <Params, Response>(svc: string, params: Params): Response;
}
export declare class Wialon extends RemoteAPI {
    static login: (params: TokenLoginParams, host?: string) => Promise<Wialon>;
    execute: ExecuteMethod;
    get Unit(): Unit;
    get Core(): Core;
    get Messages(): Messages;
    get Utils(): Utils;
    get Item(): Item;
}
export {};
