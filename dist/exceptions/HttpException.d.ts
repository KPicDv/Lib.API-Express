export default class HttpException extends Error {
    private readonly _status;
    constructor(status: number, message: string);
    toJson(): any;
    get status(): number;
}
