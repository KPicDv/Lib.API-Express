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
 * Définit la méthode comme étant une API PATCH.
 */
declare const Patch: (path?: string) => MethodDecorator;
/**
 * Définit la méthode comme étant une API DELETE.
 */
declare const Delete: (path?: string) => MethodDecorator;
export { Get, Post, Put, Patch, Delete, };
