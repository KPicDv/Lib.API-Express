"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@kpic/logger");
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
class ExceptionHandlerMiddleware {
    /**
     * Traitement des exceptions.
     */
    handle(error, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (error instanceof HttpException_1.default) {
                logger_1.Logger.error(`[${req.method.toUpperCase()}] ${req.url} [ERREUR ${error.status}] → ${error.message}`);
                res.status(error.status).json(error.toJson());
            }
            else {
                logger_1.Logger.error(`${req.url} [ERREUR INCONNUE]`);
                console.error(error);
                res.status(500).json({
                    message: 'Une erreur est survenue'
                });
            }
            next();
        });
    }
    handler() {
        return this.handle.bind(this);
    }
}
exports.default = ExceptionHandlerMiddleware;
