"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Middleware {
    handler() {
        return this.handle.bind(this);
    }
}
exports.default = Middleware;
