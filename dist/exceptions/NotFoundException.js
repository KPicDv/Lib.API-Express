"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("./HttpException"));
class NotFoundException extends HttpException_1.default {
    constructor(api = false) {
        super(404, `${api ? 'API' : 'Elément'} introuvable.`);
    }
}
exports.default = NotFoundException;
