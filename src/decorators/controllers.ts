import 'reflect-metadata';

/**
 * Définit la classe comme étant un contrôleur.
 */
const Controller = (prefix = ''): ClassDecorator => (target: any) => {
    Reflect.defineMetadata('prefix', prefix, target);

    if (!Reflect.hasMetadata('routes', target)) {
        Reflect.defineMetadata('routes', [], target);
    }
    
    if (!Reflect.hasMetadata('middlewares', target)) {
        Reflect.defineMetadata('middlewares', [], target);
    }
};

export {
    Controller,
};
