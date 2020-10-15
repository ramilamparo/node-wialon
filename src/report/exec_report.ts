export interface Params {
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

export interface Response {
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
