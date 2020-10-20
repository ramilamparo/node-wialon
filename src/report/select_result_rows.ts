export type Params = {
	tableIndex: number;
	config: ParamsConfigRow | ParamsConfigRange;
};
export interface ParamsConfigRow {
	type: "row";
	data: {
		/** rows - row index (you can indicate the index of a nested row up to the next-to-last nesting level); */
		rows: number[];
		/** level - nesting level; */
		level: number;
		/** flat - show nesting levels on a level with parent: 0 - no, 1 - yes (optional parameter, default - 0); */
		flat?: number;
	};
}

export interface ParamsConfigRange {
	type: "range";
	data: {
		/** from - first row index; */
		from: number;
		/** to - last row index; */
		to: number;
		/** level - nesting level; */
		level: number;
		/** flat - show nesting levels on a level with parent: 0 - no, 1 - yes (optional parameter, default - 0); */
		flat?: number;
		/** rawValues - show parameters v, vt: 0 - no, 1 - yes (optional parameter, default - 0). */
		rawValues?: number;
	};
}

export type ReportTableCell = {
	/** Human readable cell value */
	t: string;
	/** original cell value */
	v?: number;
	/** value type */
	vt?: number;
	pi?: {
		/** property items property items type */
		t: string;
		ids: any[];
	};
	/** latitude */
	y: number;
	/** longitude */
	x: number;
};

export type Row = Omit<ResponseSingle, "c"> &
	Partial<Pick<ResponseSingle, "c">>;

export type ResponseSingle = {
	/** row index (from 0) */
	n: number;
	/** number of first message in specified interval */
	i1: number;
	/** number of last message in specified interval */
	i2: number;
	/** time of first message in specified interval */
	t1: number;
	/** time of last message in specified interval */
	t2: number;
	/** quantity of rows with next nesting level */
	d: number;
	/** cells array text value of cell
	 * or object formatted cell value */
	c: Array<ReportTableCell | string>;
	/** holds subrows which corresponds to requested nesting level,
		set of fields will be the same as parent row has */
	r: Row[];
};

export type Response = ResponseSingle[];
