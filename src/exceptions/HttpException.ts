export default abstract class HttpException extends Error {
    private readonly _status: number;

    constructor(status: number, message: string) {
        super(message);

        this._status = status;
    }

    public toJson(): any {
        return {
            message: this.message
        };
    }

    get status() {
        return this._status;
    }
}
