"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const LogType_1 = require("../enums/LogType");
class Logger {
    /**
     * Ajoute un log basique.
     */
    static log(content) {
        this.addLog(content, LogType_1.LogType.Log);
    }
    /**
     * Ajoute un log de type INFO.
     */
    static info(content) {
        this.addLog(content, LogType_1.LogType.Info);
    }
    /**
     * Ajoute un log de type SUCCES.
     */
    static success(content) {
        this.addLog(content, LogType_1.LogType.Success);
    }
    /**
     * Ajoute un log de type ALERTE.
     */
    static warning(content) {
        this.addLog(content, LogType_1.LogType.Warning);
    }
    /**
     * Ajoute un log de type ERREUR.
     */
    static error(content) {
        this.addLog(content, LogType_1.LogType.Error);
    }
    /**
     * Ajoute un log.
     */
    static addLog(content, type) {
        const enrichedType = `[${(type == LogType_1.LogType.Success ? LogType_1.LogType.Info : type).toUpperCase()}]`.padEnd(6, ' ');
        const enrichedContent = `[${(0, moment_1.default)().format('DD/MM/YYYY HH:mm:ss')}] ${content}`;
        switch (type) {
            case LogType_1.LogType.Info:
                console.log(enrichedContent.cyan);
                break;
            case LogType_1.LogType.Success:
                console.log(enrichedContent.green);
                break;
            case LogType_1.LogType.Warning:
                console.log(enrichedContent.yellow);
                break;
            case LogType_1.LogType.Error:
                console.log(enrichedContent.red);
                break;
            default:
                console.log(enrichedContent);
                break;
        }
    }
}
exports.default = Logger;
