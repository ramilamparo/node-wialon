export const get = (action: "create" | "update" | "delete") => {
	switch (action) {
		case "update":
		case "create":
			return [
				1 /* service interval ID */,
				{
					id: 1 /* service interval ID */,
					n: "name" /* name */,
					t: "desc" /* description */,
					im: 1 /* mileage interval */,
					it: 1 /* days interval */,
					ie: 1 /* engine hours interval */,
					pm: 1 /* last service for mileage interval, km */,
					pt: 1 /* last service for days interval, sec (UTC) */,
					pe: 1 /* last service for engine hours interval, h */,
					c: 1 /* done times */
				}
			];
		case "delete":
			return [1 /* service interval ID */, null];
		default:
			throw new Error("Unknown action " + action);
	}
};
