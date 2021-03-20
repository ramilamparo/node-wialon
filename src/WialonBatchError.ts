import { WialonError } from "./WialonError";

export class WialonBatchError extends Error {
	private errors: Array<{ error: WialonError; index: number }> = [];

	constructor() {
		super("A batch error has occurred.");
	}

	public addError = (error: WialonError, index: number) => {
		this.errors.push({ error, index });
	};

	public getErrors = () => {
		return this.errors;
	};

	public hasErrors = () => {
		return this.errors.length > 0;
	};
}
