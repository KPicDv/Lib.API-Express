import HttpException from './HttpException';
export default class NotFoundException extends HttpException {
    constructor(api?: boolean);
}
