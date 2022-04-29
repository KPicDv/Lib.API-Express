import fs from 'fs';
import moment from 'moment';
import { LogType } from '../enums/LogType';

export default class Logger {
    /**
     * Ajoute un log basique.
     */
    public static log(content: string) {
        this.addLog(content, LogType.Log);
    }

    /**
     * Ajoute un log de type INFO.
     */
    public static info(content: string) {
        this.addLog(content, LogType.Info);
    }

    /**
     * Ajoute un log de type SUCCES.
     */
    public static success(content: string) {
        this.addLog(content, LogType.Success);
    }

    /**
     * Ajoute un log de type ALERTE.
     */
    public static warning(content: string) {
        this.addLog(content, LogType.Warning);
    }

    /**
     * Ajoute un log de type ERREUR.
     */
    public static error(content: string) {
        this.addLog(content, LogType.Error);
    }

    /**
     * Ajoute un log.
     */
    private static addLog(content: string, type: LogType) {
        const enrichedType = `[${(type == LogType.Success ? LogType.Info : type).toUpperCase()}]`.padEnd(6, ' ');
        const enrichedContent = `[${moment().format('DD/MM/YYYY HH:mm:ss')}] ${content}`;

        switch (type) {
            case LogType.Info:
                console.log(enrichedContent.cyan);
                break;

            case LogType.Success:
                console.log(enrichedContent.green);
                break;

            case LogType.Warning:
                console.log(enrichedContent.yellow);
                break;

            case LogType.Error:
                console.log(enrichedContent.red);
                break;

            default:
                console.log(enrichedContent);
                break;
        }
    }
}
