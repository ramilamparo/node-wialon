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

export class Report extends RemoteAPI {
	public cleanupResult = async () => {
		return RemoteAPI.execute<ReportCleanupResultResponse>(
			"report/cleanup_result"
		);
	};

	public execReport = async (params: ReportExecReportParams) => {
		return RemoteAPI.execute<ReportExecReportParams, ReportExecReportResponse>(
			"report/exec_report",
			params,
			this.sessionId,
			this.options.host
		);
	};

	public selectResultRows = async (params: ReportSelectResultRowsParams) => {
		return RemoteAPI.execute<
			ReportSelectResultRowsParams,
			ReportSelectResultRowsResponse
		>("report/select_result_rows", params, this.sessionId, this.options.host);
	};
}
