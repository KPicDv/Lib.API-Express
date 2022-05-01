"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this._status = status;
    }
    toJson() {
        return {
            message: this.message
        };
    }
    get status() {
        return this._status;
    }
}
exports.default = HttpException;
