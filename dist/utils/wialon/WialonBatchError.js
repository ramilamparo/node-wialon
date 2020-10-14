"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WialonBatchError extends Error {
    constructor(errors) {
        super("A batch error has occurred.");
        this.errors = errors;
    }
}
exports.WialonBatchError = WialonBatchError;
