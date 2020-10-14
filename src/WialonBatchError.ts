import { WialonError } from ".";

export class WialonBatchError extends Error {
	constructor(public errors: WialonError[]) {
		super("A batch error has occurred.");
	}
}
