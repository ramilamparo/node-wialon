import { RemoteAPI } from "./wialon/RemoteAPI";
export default class Wialon extends RemoteAPI {
    static login: (params: any, host?: string) => Promise<any>;
    execute: <T = any>(svc: string, params: unknown) => Promise<T>;
    readonly Unit: any;
    readonly Core: any;
    readonly Messages: any;
    readonly Utils: any;
    readonly Item: any;
}
