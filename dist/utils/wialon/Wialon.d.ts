import { Core, Messages, Utils, Unit, Item, RemoteAPI, TokenLoginParams } from "./";
export declare class Wialon extends RemoteAPI {
    static login: (params: TokenLoginParams, host?: string) => Promise<Wialon>;
    execute: <T = any>(svc: string, params: unknown) => Promise<T>;
    readonly Unit: Unit;
    readonly Core: Core;
    readonly Messages: Messages;
    readonly Utils: Utils;
    readonly Item: Item;
}
