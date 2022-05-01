import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import InvalidFormException from '../exceptions/InvalidFormException';
import Middleware from './Middleware';

export default class ValidationMiddleware extends Middleware {
    private readonly _validations: Array<ValidationChain>;

    constructor(validations: Array<ValidationChain>) {
        super();
        this._validations = validations;
    }

    /**
     * Vérifie l'authentification de l'utilisateur.
     */
    public async handle(req: Request, res: Response, next: NextFunction) {
        await Promise.all(this._validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);

        if (!errors.isEmpty()) throw new InvalidFormException(errors.array({ onlyFirstError: true }));

        next();
    }
}
