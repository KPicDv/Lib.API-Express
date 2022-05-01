import HttpException from './HttpException';

type ValidationError = {
    param: string
    msg: string
}

export default class InvalidFormException extends HttpException {
    private readonly _errors: Array<ValidationError>;

    constructor(errors: Array<ValidationError>) {
        super(422, 'Formulaire invalide.');
        this._errors = errors;
    }

    public toJson(): any {
        return {
            errors: Object.fromEntries(this._errors.map((error) => [
                error.param,
                error.msg
            ]))
        };
    }
}
