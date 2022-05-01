import 'reflect-metadata';
import Middleware from '../middlewares/Middleware';
/**
 * Définit la classe comme étant un contrôleur.
 */
declare const Controller: (prefix?: string) => ClassDecorator;
/**
 * Définit la méthode comme étant une API GET.
 */
declare const Get: (path?: string) => MethodDecorator;
/**
 * Définit la méthode comme étant une API POST.
 */
declare const Post: (path?: string) => MethodDecorator;
/**
 * Définit la méthode comme étant une API PUT.
 */
declare const Put: (path?: string) => MethodDecorator;
/**
 * Définit la méthode comme étant une API DELETE.
 */
declare const Delete: (path?: string) => MethodDecorator;
/**
 * Ajoute une route au contrôleur.
 */
declare const addMiddleware: (middleware: Middleware, target: Object, action: string) => void;
export { Controller, Get, Post, Put, Delete, addMiddleware };
