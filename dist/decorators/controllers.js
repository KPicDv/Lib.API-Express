"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Post = exports.Get = exports.Controller = void 0;
require("reflect-metadata");
const ApiMethod_1 = require("../enums/ApiMethod");
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
 * Définit la méthode comme étant une API GET.
 */
const Get = (path = '') => (target, propertyKey) => addRoute(path, ApiMethod_1.ApiMethod.Get, target, propertyKey);
exports.Get = Get;
/**
 * Définit la méthode comme étant une API POST.
 */
const Post = (path = '') => (target, propertyKey) => addRoute(path, ApiMethod_1.ApiMethod.Post, target, propertyKey);
exports.Post = Post;
/**
 * Définit la méthode comme étant une API PUT.
 */
const Put = (path = '') => (target, propertyKey) => addRoute(path, ApiMethod_1.ApiMethod.Put, target, propertyKey);
exports.Put = Put;
/**
 * Définit la méthode comme étant une API DELETE.
 */
const Delete = (path = '') => (target, propertyKey) => addRoute(path, ApiMethod_1.ApiMethod.Delete, target, propertyKey);
exports.Delete = Delete;
/**
 * Ajoute une route au contrôleur.
 */
const addRoute = (path, method, target, action) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    const route = routes.find((r) => r.action == action);
    if (route) {
        route.method = method;
        route.path = path;
    }
    else {
        routes.push({
            method,
            path,
            action
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
};
