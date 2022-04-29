import { ApiMethod } from '../enums/ApiMethod';

export type Route = {
    path?: string
    method?: ApiMethod
    action: string
}
