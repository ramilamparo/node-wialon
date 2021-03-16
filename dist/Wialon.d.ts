import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { Report } from "./report/Report";
import { Resource } from "./resource/Resource";
import { RemoteAPI } from "./RemoteAPI";
import type { TokenLoginParams } from "./token";
import type { CoreUseAuthHashParams, CoreDuplicateParams } from "./core";
export interface AvlEvtsResponse<Data> {
    /** server time */
    tm: number;
    /** events */
    events: [{
        /** item ID */
        i: number;
        /** event type: m - message, u - update, d - delete */
        t: string;
        /** description of event, depends on event type */
        d: Data;
    }];
}
export declare class Wialon extends RemoteAPI {
    static tokenLogin: (params: TokenLoginParams, host?: string | undefined) => Promise<Wialon>;
    static useSession: (sessionId: string, host?: string | undefined) => Wialon;
    static useAuthHash: (params: CoreUseAuthHashParams, host?: string | undefined) => Promise<Wialon>;
    duplicateSession: (params?: (Partial<CoreDuplicateParams> & {
        host?: string | undefined;
    }) | undefined) => Promise<Wialon>;
    execute: <Params, Response_1>(svc: string, params: Params) => Promise<Response_1>;
    avlEvts: <Data = unknown>() => Promise<import("axios").AxiosResponse<AvlEvtsResponse<Data>>>;
    get Unit(): Unit;
    get Core(): Core;
    get Messages(): Messages;
    get Utils(): Utils;
    get Item(): Item;
    get Report(): Report;
    get Resource(): Resource;
}
