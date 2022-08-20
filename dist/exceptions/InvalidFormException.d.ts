import HttpException from './HttpException';
export default class InvalidFormException extends HttpException {
    private readonly _errors;
    constructor(errors: {
        [key: string]: string;
    });
    toJson(): any;
}
