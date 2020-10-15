import { RemoteAPI } from "../RemoteAPI";

interface ReportExecReportParams {
	reportResourceId: number;
	reportTemplateId: number;
	reportObjectId: number;
	reportObjectSecId: number;
	interval: {
		from: number;
		to: number;
		flags: number;
	};
	reportTemplate?: object;
}

interface ReportExecReportResponse {
	/** report execution result */
	reportResult: {
		/** messages loaded: 0 - no, 1 - yes */
		msgsRendered: number;
		/** array of statistics parameters */
		/** [parameter name, value] */
		stats: [string, string][];

		/** array of tables */
		tables: [
			{
				/** table type */
				name: string;
				/** name */
				label: string;
				grouping: {
					/** grouping type */
					type: string;
				};
				/** table flags (see below) */
				flags: number;
				/** quantity of lines */
				rows: number;
				/** max level in table */
				level: number;
				/** columns count */
				columns: number;
				/** array of table headers */
				header: string[];
				/** total array of cells */
				total: string[];
			}
		];
		/** attachments array (charts, photos & videos) */
		attachments: [
			{
				/** for charts name */
				name: string;
				/** type: chart, photo */
				type: string;
				/** array with names of chart's curved lines */
				datasets: string[];
			},
			{
				/** name and following parameters separated by ";" */
				name: string;
				/** formatted date */
				ftm: string;
				/** unit ID */
				uid: string;
				/** UNIX time */
				tm: string;
				/** index of the same-type attachments registered simultaneously */
				idx: string;
				/** latitude */
				lat: string;
				/** longitude */
				lon: string;
				/** attachment type */
				type: string;
			}
		];
	};
	reportLayer: {
		/** graphic layer layer name */
		name: string;
		bounds: [
			/** minimal latitude */
			number,
			/** minimal longitude */
			number,
			/** maximal latitude */
			number,
			/** maximal longitude */
			number
		];
	};
	/** quantity of layers to be merged in report layer */
	layerCount: number;
}

export type ReportSelectResultRowsParams = {
	tableIndex: number;
	config:
		| ReportSelectResultRowsParamsConfigRow
		| ReportSelectResultRowsParamsConfigRange;
};

export interface ReportSelectResultRowsParamsConfigRow {
	data: {
		/** rows - row index (you can indicate the index of a nested row up to the next-to-last nesting level); */
		rows: number[];
		/** level - nesting level; */
		level: number;
		/** flat - show nesting levels on a level with parent: 0 - no, 1 - yes (optional parameter, default - 0); */
		flat: number;
		/** from - index of first nested row (optional parameter); */
		from?: number;
		/** to - index of last nested row (optional parameter). */
		to?: number;
	};
}

export interface ReportSelectResultRowsParamsConfigRange {
	type: "range";
	data: {
		/** from - first row index; */
		from: number;
		/** to - last row index; */
		to: number;
		/** level - nesting level; */
		level: number;
		/** flat - show nesting levels on a level with parent: 0 - no, 1 - yes (optional parameter, default - 0); */
		flat: number;
		/** rawValues - show parameters v, vt: 0 - no, 1 - yes (optional parameter, default - 0). */
		rawValues: number;
	};
}

export class Report extends RemoteAPI {
	public cleanupResult = async () => {};

	public execReport = async (params: ReportExecReportParams) => {
		return RemoteAPI.execute<ReportExecReportParams, ReportExecReportResponse>(
			"report/exec_report",
			params,
			this.user.eid,
			this.host
		);
	};

	public selectResultRows = async (params: ReportSelectResultRowsParams) => {};
}
