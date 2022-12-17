"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.Controller = void 0;
require("reflect-metadata");
/**
 * Définit la classe comme étant un contrôleur.
 */
const Controller = (prefix = '') => (target) => {
    Reflect.defineMetadata('prefix', prefix, target);
    if (!Reflect.hasMetadata('routes', target)) {
        Reflect.defineMetadata('routes', [], target);
    }
};
exports.Controller = Controller;
/**
 * Ajoute l'authentification au contrôleur.
 */
const Auth = () => (target) => {
    Reflect.defineMetadata('auth', true, target);
};
exports.Auth = Auth;
