import type { Response } from "./load_interval";
interface Params {
    itemId: number;
    lastTime: number;
    lastCount: number;
    flags: number;
    flagsMask: number;
    loadCount: number;
}
export { Params, Response };
