import { Core } from "./core/Core";
import { Messages } from "./messages/Messages";
import { Utils } from "./utils/Utils";
import { Unit } from "./unit/Unit";
import { Item } from "./item/Item";
import { Report } from "./report/Report";
import { RemoteAPI } from "./RemoteAPI";
import { TokenLoginParams } from "./token";
export declare class Wialon extends RemoteAPI {
    static login: (params: TokenLoginParams, host?: string) => Promise<Wialon>;
    get Unit(): Unit;
    get Core(): Core;
    get Messages(): Messages;
    get Utils(): Utils;
    get Item(): Item;
    get Report(): Report;
}
