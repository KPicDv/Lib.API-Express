/// <reference types="qs" />
import { NextFunction, Request, Response } from 'express';
export default class ExceptionHandlerMiddleware {
    /**
     * Traitement des exceptions.
     */
    handle(error: Error | string, req: Request, res: Response, next: NextFunction): Promise<void>;
    handler(): (error: string | Error, req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => Promise<void>;
}
