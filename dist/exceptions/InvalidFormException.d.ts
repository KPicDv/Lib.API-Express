import HttpException from './HttpException';
declare type ValidationError = {
    param: string;
    msg: string;
};
export default class InvalidFormException extends HttpException {
    private readonly _errors;
    constructor(errors: Array<ValidationError>);
    toJson(): any;
}
export {};
