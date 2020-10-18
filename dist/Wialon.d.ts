import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { Report } from "./report/Report";
import { RemoteAPI } from "./RemoteAPI";
import type { TokenLoginParams } from "./token";
import type { CoreUseAuthHashParams, CoreDuplicateParams } from "./core";
export interface AvlEvtsResponse {
    /** server time */
    tm: number;
    /** events */
    events: [{
        /** item ID */
        i: number;
        /** event type: m - message, u - update, d - delete */
        t: string;
        /** description of event, depends on event type */
        d: any;
    }];
}
export declare class Wialon extends RemoteAPI {
    static tokenlogin: (params: TokenLoginParams, host?: string | undefined) => Promise<Wialon>;
    static useSession: (sessionId: string, host?: string | undefined) => Promise<Wialon>;
    static useAuthHash: (params: CoreUseAuthHashParams, host?: string | undefined) => Promise<Wialon>;
    duplicateSession: (params?: (Partial<CoreDuplicateParams> & {
        host?: string | undefined;
    }) | undefined) => Promise<Wialon>;
    avlEvts: () => Promise<import("axios").AxiosResponse<any>>;
    get Unit(): Unit;
    get Core(): Core;
    get Messages(): Messages;
    get Utils(): Utils;
    get Item(): Item;
    get Report(): Report;
}
