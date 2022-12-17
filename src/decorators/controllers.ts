import 'reflect-metadata';

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
 * Ajoute l'authentification au contrôleur.
 */
const Auth = (): ClassDecorator => (target: any) => {
    Reflect.defineMetadata('auth', true, target);
};

export {
    Controller,
    Auth,
};
