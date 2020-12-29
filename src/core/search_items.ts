export interface Params {
	spec: {
		itemsType: string;
		propName: string;
		propValueMask: string;
		sortType: string;
		propType: string;
		or_logic?: boolean;
	};
	force?: number;
	flags: number;
	from: number;
	to: number;
}

export interface Response<T> {
	searchSpec: {
		itemsTypes: string;
		propName: string;
		propValueMask: string;
		sortTypes: string;
		propType: string;
		or_logic: string;
	};
	dataFlags: number;
	totalItemsCount: number;
	indexFrom: number;
	indexTo: number;
	items: T[];
}
