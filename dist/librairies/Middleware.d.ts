import { NextFunction, Request, Response } from 'express';
export default abstract class Middleware {
    abstract handle(req: Request, res: Response, next: NextFunction): Promise<void>;
    handler(): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => Promise<void>;
}
