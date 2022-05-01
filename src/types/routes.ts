import { ApiMethod } from '../enums/ApiMethod';
import Middleware from '../middlewares/Middleware';

export type Route = {
    path?: string
    method?: ApiMethod
    action: string
    middlewares: Array<Middleware>
}
