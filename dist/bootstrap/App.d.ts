import 'colors';
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
     * Ecoute le port.
     */
    listen(port: number): void;
    get app(): import("express-serve-static-core").Express;
}