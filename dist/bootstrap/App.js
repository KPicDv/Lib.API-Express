"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const logger_1 = require("@kpic/logger");
const NotFoundException_1 = __importDefault(require("../exceptions/NotFoundException"));
const ExceptionHandlerMiddleware_1 = __importDefault(require("../middlewares/ExceptionHandlerMiddleware"));
class App {
    constructor() {
        this._app = (0, express_1.default)();
    }
    /**
     * Initialise Express.
     */
    init() {
        this._server = http_1.default.createServer(this._app);
        this._app.use(express_1.default.json());
        this._app.use((0, cors_1.default)({ origin: '*' }));
    }
    /**
     * Crée les routes.
     */
    initControllers(controllers) {
        controllers.forEach((Controller) => {
            const prefix = Reflect.getMetadata('prefix', Controller);
            const routes = Reflect.getMetadata('routes', Controller);
            const instance = new Controller();
            routes.forEach((route) => {
                if (!route.method) {
                    logger_1.Logger.error(`${Controller.name}.${route.action} n\'est pas définie.`.red);
                    return;
                }
                const action = instance[route.action].bind(instance);
                const middlewares = route.middlewares.map((middleware) => middleware.handler());
                this._app[route.method](prefix + route.path, middlewares, action);
            });
        });
    }
    /**
     * Traitement des url introuvables.
     */
    handleNotFoundUrls() {
        this._app.use(() => {
            throw new NotFoundException_1.default(true);
        });
    }
    /**
     * Traitement des exceptions.
     */
    handleErrors() {
        this._app.use(new ExceptionHandlerMiddleware_1.default().handler());
    }
    /**
     * Ecoute le port.
     */
    listen(port) {
        this._app.listen(port, '0.0.0.0', () => logger_1.Logger.info(`Serveur lancé sur le port ${port}.`));
    }
    get app() {
        return this._app;
    }
    get server() {
        return this._server;
    }
}
exports.default = App;
