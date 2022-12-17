import 'reflect-metadata';
/**
 * Définit la classe comme étant un contrôleur.
 */
declare const Controller: (prefix?: string) => ClassDecorator;
/**
 * Ajoute l'authentification au contrôleur.
 */
declare const Auth: () => ClassDecorator;
export { Controller, Auth, };
