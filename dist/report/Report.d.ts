import { RemoteAPI } from "../RemoteAPI";
import { Response as ReportCleanupResultResponse } from "./cleanup_result";
import { Params as ReportSelectResultRowsParams, Response as ReportSelectResultRowsResponse } from "./select_result_rows";
import { Params as ReportExecReportParams, Response as ReportExecReportResponse } from "./exec_report";
export declare class Report extends RemoteAPI {
    cleanupResult: () => Promise<ReportCleanupResultResponse>;
    execReport: (params: ReportExecReportParams) => Promise<ReportExecReportResponse>;
    selectResultRows: (params: ReportSelectResultRowsParams) => Promise<ReportSelectResultRowsResponse>;
}
