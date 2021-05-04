import { RemoteAPI } from "../RemoteAPI";
import { Response as ReportCleanupResultResponse } from "./cleanup_result";
import {
	Params as ReportSelectResultRowsParams,
	Response as ReportSelectResultRowsResponse
} from "./select_result_rows";
import {
	Params as ReportExecReportParams,
	Response as ReportExecReportResponse
} from "./exec_report";
import { Response as ReportGetReportStatusResponse } from "./get_report_status";
import { Response as ReportApplyReportResultResponse } from "./apply_report_result";

export class Report extends RemoteAPI {
	public cleanupResult = async () =>
		RemoteAPI.execute<ReportCleanupResultResponse>("report/cleanup_result");

	public execReport = async <T extends ReportExecReportParams>(params: T) =>
		RemoteAPI.execute<ReportExecReportParams, ReportExecReportResponse<T>>(
			"report/exec_report",
			params,
			this.sessionId,
			this.options.host
		);

	public selectResultRows = async (params: ReportSelectResultRowsParams) =>
		RemoteAPI.execute<
			ReportSelectResultRowsParams,
			ReportSelectResultRowsResponse
		>("report/select_result_rows", params, this.sessionId, this.options.host);

	public getReportStatus = async () =>
		RemoteAPI.execute<{}, ReportGetReportStatusResponse>(
			"report/get_report_status",
			{},
			this.sessionId,
			this.options.host
		);

	public applyReportResult = async () =>
		RemoteAPI.execute<{}, ReportApplyReportResultResponse>(
			"report/apply_report_result",
			{},
			this.sessionId,
			this.options.host
		);
}
