import Middleware from '../middlewares/Middleware';
/**
 * Ajoute le middleware de validation.
 */
declare const Validate: (validations: Array<any>) => MethodDecorator;
/**
 * Ajoute une route au contrôleur.
 */
declare const addMiddleware: (middleware: Middleware, target: Object, action: string) => void;
export { Validate, addMiddleware };
