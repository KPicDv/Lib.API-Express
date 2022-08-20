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
const express_validator_1 = require("express-validator");
const InvalidFormException_1 = __importDefault(require("../exceptions/InvalidFormException"));
const Middleware_1 = __importDefault(require("./Middleware"));
class ValidationMiddleware extends Middleware_1.default {
    constructor(validations) {
        super();
        this._validations = validations;
    }
    /**
     * Vérifie l'authentification de l'utilisateur.
     */
    handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this._validations.map((validation) => validation.run(req)));
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                const mappedErrors = Object.fromEntries(errors.array({ onlyFirstError: true })
                    .map((error) => [
                    error.param,
                    error.msg
                ]));
                throw new InvalidFormException_1.default(mappedErrors);
            }
            next();
        });
    }
}
exports.default = ValidationMiddleware;
