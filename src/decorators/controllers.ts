import 'reflect-metadata';
import { ApiMethod } from '../enums/ApiMethod';
import { Route } from '../types/routes';

/**
 * Définit la classe comme étant un contrôleur.
 */
const Controller = (prefix = ''): ClassDecorator => (target: any) => {
    Reflect.defineMetadata('prefix', prefix, target);

    if (!Reflect.hasMetadata('routes', target)) {
        Reflect.defineMetadata('routes', [], target);
    }
};

/**
 * Définit la méthode comme étant une API GET.
 */
const Get = (path = ''): MethodDecorator => (target, propertyKey): void => addRoute(path, ApiMethod.Get, target, propertyKey as string);

/**
 * Définit la méthode comme étant une API POST.
 */
const Post = (path = ''): MethodDecorator => (target, propertyKey): void => addRoute(path, ApiMethod.Post, target, propertyKey as string);

/**
 * Définit la méthode comme étant une API PUT.
 */
const Put = (path = ''): MethodDecorator => (target, propertyKey): void => addRoute(path, ApiMethod.Put, target, propertyKey as string);

/**
 * Définit la méthode comme étant une API DELETE.
 */
const Delete = (path = ''): MethodDecorator => (target, propertyKey): void => addRoute(path, ApiMethod.Delete, target, propertyKey as string);

/**
 * Ajoute une route au contrôleur.
 */
const addRoute = (path: string, method: ApiMethod, target: Object, action: string) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
    const route = routes.find((r) => r.action == action);

    if (route) {
        route.method = method;
        route.path = path;
    } else {
        routes.push({
            method,
            path,
            action
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
};

export {
    Controller,
    Get,
    Post,
    Put,
    Delete
};