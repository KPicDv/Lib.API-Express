import Middleware from '../middlewares/Middleware';
import ValidationMiddleware from '../middlewares/ValidationMiddleware';
import { Route } from '../types/routes';

/**
 * Ajoute le middleware de validation.
 */
const Validate = (validations: Array<any>): MethodDecorator => (
    (target, propertyKey): void => (
        addRouteMiddleware(new ValidationMiddleware(validations), target, propertyKey as string)
    )
)

/**
 * Ajoute un middleware à la route.
 */
const addRouteMiddleware = (middleware: Middleware, target: Object, action: string) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
    const route = routes.find((r) => r.action == action);

    if (route) {
        route.middlewares.push(middleware);
    } else {
        routes.push({
            action,
            middlewares: [middleware]
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
};

/**
 * Ajoute un middleware au contrôleur.
 */
const addControllerMiddleware = (middleware: Middleware, target: Object) => {
    if (!Reflect.hasMetadata('middlewares', target.constructor)) {
        Reflect.defineMetadata('middlewares', [], target.constructor);
    }

    const middlewares = Reflect.getMetadata('middlewares', target.constructor) as Array<Middleware>;
    middlewares.push(middleware);
};

export {
    Validate,
    addRouteMiddleware,
    addControllerMiddleware,
};
