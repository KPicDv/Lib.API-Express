export default class Logger {
    /**
     * Ajoute un log basique.
     */
    static log(content: string): void;
    /**
     * Ajoute un log de type INFO.
     */
    static info(content: string): void;
    /**
     * Ajoute un log de type SUCCES.
     */
    static success(content: string): void;
    /**
     * Ajoute un log de type ALERTE.
     */
    static warning(content: string): void;
    /**
     * Ajoute un log de type ERREUR.
     */
    static error(content: string): void;
    /**
     * Ajoute un log.
     */
    private static addLog;
}
