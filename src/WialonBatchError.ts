import { WialonError } from "./WialonError";

export class WialonBatchError<T> extends Error {
	private errors: Array<{ error: WialonError; index: number }> = [];

	constructor(public response: T) {
		super("A batch error has occurred.");
	}

	public addError = (error: WialonError, index: number) => {
		this.errors.push({ error, index });
	};

	public getErrors = () => this.errors;

	public hasErrors = () => this.errors.length > 0;
}
