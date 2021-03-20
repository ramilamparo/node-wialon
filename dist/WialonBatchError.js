"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WialonBatchError = void 0;
class WialonBatchError extends Error {
    constructor() {
        super("A batch error has occurred.");
        this.errors = [];
        this.addError = (error, index) => {
            this.errors.push({ error, index });
        };
        this.getErrors = () => {
            return this.errors;
        };
        this.hasErrors = () => {
            return this.errors.length > 0;
        };
    }
}
exports.WialonBatchError = WialonBatchError;
