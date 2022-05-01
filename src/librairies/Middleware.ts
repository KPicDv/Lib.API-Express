import { NextFunction, Request, Response } from 'express';

export default abstract class Middleware {
    abstract handle(req: Request, res: Response, next: NextFunction): Promise<void>

    public handler() {
        return this.handle.bind(this);
    }
}
