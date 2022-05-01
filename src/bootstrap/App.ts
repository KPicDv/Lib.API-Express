import 'colors'
import express from 'express'
import cors from 'cors'
import { Route } from '../types/routes';
import Logger from '../librairies/Logger';

export default class App {
    private _app = express()

    /**
     * Initialise Express.
     */
    public init() {
        this._app.use(express.json())
        this._app.use(cors({ origin: '*' }))
    }

    /**
     * Crée les routes.
     */
    public initControllers(controllers: Array<any>) {
        controllers.forEach((Controller) => {
            const prefix = Reflect.getMetadata('prefix', Controller) as string;
            const routes = Reflect.getMetadata('routes', Controller) as Array<Route>;
            const instance = new Controller();

            routes.forEach((route) => {
                if (!route.method) {
                    Logger.error(`${Controller.name}.${route.action} n\'est pas définie.`.red);
                    return;
                }

                const action = (instance[route.action as keyof typeof instance] as Function).bind(instance);

                this.app[route.method](prefix + route.path, action);
            });
        });
    }

    /**
     * Ecoute le port.
     */
    public listen(port: number) {
        this._app.listen(port, '0.0.0.0', () => Logger.info(`Serveur lancé sur le port ${port}.`));
    }

    get app() {
        return this._app
    }
}