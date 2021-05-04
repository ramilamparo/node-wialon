import { RemoteAPI } from "../RemoteAPI";
import { Response as ReportCleanupResultResponse } from "./cleanup_result";
import { Params as ReportSelectResultRowsParams, Response as ReportSelectResultRowsResponse } from "./select_result_rows";
import { Params as ReportExecReportParams, Response as ReportExecReportResponse } from "./exec_report";
import { Response as ReportGetReportStatusResponse } from "./get_report_status";
export declare class Report extends RemoteAPI {
    cleanupResult: () => Promise<ReportCleanupResultResponse>;
    execReport: <T extends ReportExecReportParams>(params: T) => Promise<ReportExecReportResponse<T>>;
    selectResultRows: (params: ReportSelectResultRowsParams) => Promise<ReportSelectResultRowsResponse>;
    getReportStatus: () => Promise<ReportGetReportStatusResponse>;
    applyReportResult: () => Promise<import("./exec_report").ExecResponse>;
}
