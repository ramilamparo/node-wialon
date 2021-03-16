import { RemoteAPI } from "../RemoteAPI";
import type { ResourceUpdateDriverCallMode, ResourceUpdateDriverParams, ResourceUpdateDriverResponse } from ".";
export declare class Resource extends RemoteAPI {
    updateDriver: <CallMode extends ResourceUpdateDriverCallMode>(params: ResourceUpdateDriverParams<CallMode>) => Promise<ResourceUpdateDriverResponse<CallMode>>;
}
