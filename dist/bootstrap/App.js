"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Logger_1 = __importDefault(require("../librairies/Logger"));
class App {
    constructor() {
        this._app = (0, express_1.default)();
    }
    /**
     * Initialise Express.
     */
    init() {
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
                    Logger_1.default.error(`${Controller.name}.${route.action} n\'est pas définie.`.red);
                    return;
                }
                const action = instance[route.action].bind(instance);
                this.app[route.method](prefix + route.path, action);
            });
        });
    }
    /**
     * Ecoute le port.
     */
    listen(port) {
        this._app.listen(port, '0.0.0.0', () => Logger_1.default.info(`Serveur lancé sur le port ${port}.`));
    }
    get app() {
        return this._app;
    }
}
exports.default = App;
