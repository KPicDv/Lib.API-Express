import 'colors'
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import http from 'http'
import { Route } from '../types/routes';
import { Logger } from '@kpic/logger';
import NotFoundException from '../exceptions/NotFoundException';
import ExceptionHandlerMiddleware from '../middlewares/ExceptionHandlerMiddleware';
import Middleware from '../middlewares/Middleware'

export default class App {
    private _app = express()
    private _server!: http.Server

    /**
     * Initialise Express.
     */
    public init() {
        this._server = http.createServer(this._app)
        this._app.use(express.json())
        this._app.use(cors({ origin: '*' }))
    }

    /**
     * Crée les routes.
     */
    public initControllers(controllers: Array<any>) {
        controllers.forEach((Controller) => {
            const prefix = Reflect.getMetadata('prefix', Controller) as string;
            const controllerMiddlewares = Reflect.getMetadata('middlewares', Controller) as Array<Middleware>;
            const routes = Reflect.getMetadata('routes', Controller) as Array<Route>;
            const instance = new Controller();

            routes.forEach((route) => {
                if (!route.method) {
                    Logger.error(`${Controller.name}.${route.action} n\'est pas définie.`.red);
                    return;
                }

                const action = (instance[route.action as keyof typeof instance] as Function).bind(instance);
                const middlewares = [
                    ...controllerMiddlewares.map((middleware) => middleware.handler()),
                    ...route.middlewares.map((middleware) => middleware.handler())
                ]

                this._app[route.method](prefix + route.path, middlewares, action)
            });
        });
    }
    
    /**
     * Traitement des url introuvables.
     */
    public handleNotFoundUrls() {
        this._app.use(() => {
            throw new NotFoundException('API invalide.')
        })
    }
    
    /**
     * Traitement des exceptions.
     */
    public handleErrors() {
        this._app.use(new ExceptionHandlerMiddleware().handler())
    }

    /**
     * Ecoute le port.
     */
    public async listen(port: number) {
        return new Promise<void>((resolve) => {
            this._server.listen(port, '0.0.0.0', () => {
                Logger.info(`Serveur lancé sur le port ${port}.`)
                resolve();
            });
        })
    }

    get app() {
        return this._app
    }

    get server() {
        return this._server
    }
}