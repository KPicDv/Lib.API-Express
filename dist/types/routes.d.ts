import { ApiMethod } from '../enums/ApiMethod';
import Middleware from '../librairies/Middleware';
export declare type Route = {
    path?: string;
    method?: ApiMethod;
    action: string;
    middlewares: Array<Middleware>;
};
