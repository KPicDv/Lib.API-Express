import Middleware from '../middlewares/Middleware';
import ValidationMiddleware from '../middlewares/ValidationMiddleware';
import { Route } from '../types/routes';


/**
 * Ajoute le middleware de validation.
 */
const Validate = (validations: Array<any>): MethodDecorator => {
    return (target, propertyKey): void => (
        addMiddleware(new ValidationMiddleware(validations), target, propertyKey as string)
    )
}

/**
 * Ajoute une route au contrôleur.
 */
const addMiddleware = (middleware: Middleware, target: Object, action: string) => {
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

export {
    Validate,
    addMiddleware
};
