import { NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator';
import Middleware from './Middleware';
export default class ValidationMiddleware extends Middleware {
    private readonly _validations;
    constructor(validations: Array<ValidationChain>);
    /**
     * Vérifie l'authentification de l'utilisateur.
     */
    handle(req: Request, res: Response, next: NextFunction): Promise<void>;
}
