import 'colors';
import 'express-async-errors';
export default class App {
    private _app;
    /**
     * Initialise Express.
     */
    init(): void;
    /**
     * Crée les routes.
     */
    initControllers(controllers: Array<any>): void;
    /**
     * Traitement des exceptions.
     */
    handleErrors(): void;
    /**
     * Ecoute le port.
     */
    listen(port: number): void;
    get app(): import("express-serve-static-core").Express;
}
