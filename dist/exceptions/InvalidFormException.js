"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("./HttpException"));
class InvalidFormException extends HttpException_1.default {
    constructor(errors) {
        super(422, 'Formulaire invalide.');
        this._errors = errors;
    }
    toJson() {
        return {
            errors: Object.fromEntries(this._errors.map((error) => [
                error.param,
                error.msg
            ]))
        };
    }
}
exports.default = InvalidFormException;
