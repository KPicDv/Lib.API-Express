import HttpException from './HttpException';

export default class NotFoundException extends HttpException {
    constructor(api = false) {
        super(404, `${api ? 'API' : 'Elément'} introuvable.`);
    }
}
