import HttpException from './HttpException';

export default class InvalidFormException extends HttpException {
    private readonly _errors;

    constructor(errors: { [key: string ]: string }) {
        super(422, 'Formulaire invalide.');
        this._errors = errors;
    }

    public toJson(): any {
        return {
            errors: this._errors
        };
    }
}
