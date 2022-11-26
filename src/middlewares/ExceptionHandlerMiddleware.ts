import { Logger } from '@kpic/logger';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

export default class ExceptionHandlerMiddleware {
    /**
     * Traitement des exceptions.
     */
    public async handle(error: Error | string, req: Request, res: Response, next: NextFunction) {
        if (error instanceof HttpException) {
            Logger.error(`[${req.method.toUpperCase()}] ${req.url} [ERREUR ${error.status}] → ${error.message}`);

            res.status(error.status).json(error.toJson());
        } else {
            Logger.error(`${req.url} [ERREUR INCONNUE]`);
            console.error(error);

            res.status(500).json({
                message: 'Une erreur est survenue'
            });
        }

        next();
    }

    public handler() {
        return this.handle.bind(this);
    }
}
