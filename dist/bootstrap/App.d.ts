/// <reference types="node" />
import 'colors';
import 'express-async-errors';
import http from 'http';
export default class App {
    private _app;
    private _server;
    /**
     * Initialise Express.
     */
    init(): void;
    /**
     * Crée les routes.
     */
    initControllers(controllers: Array<any>): void;
    /**
     * Traitement des url introuvables.
     */
    handleNotFoundUrls(): void;
    /**
     * Traitement des exceptions.
     */
    handleErrors(): void;
    /**
     * Ecoute le port.
     */
    listen(port: number): Promise<void>;
    get app(): import("express-serve-static-core").Express;
    get server(): http.Server;
}
