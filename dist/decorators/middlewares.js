"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMiddleware = exports.Validate = void 0;
const ValidationMiddleware_1 = __importDefault(require("../middlewares/ValidationMiddleware"));
/**
 * Ajoute le middleware de validation.
 */
const Validate = (validations) => {
    return (target, propertyKey) => (addMiddleware(new ValidationMiddleware_1.default(validations), target, propertyKey));
};
exports.Validate = Validate;
/**
 * Ajoute une route au contrôleur.
 */
const addMiddleware = (middleware, target, action) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    const route = routes.find((r) => r.action == action);
    if (route) {
        route.middlewares.push(middleware);
    }
    else {
        routes.push({
            action,
            middlewares: [middleware]
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
};
exports.addMiddleware = addMiddleware;
