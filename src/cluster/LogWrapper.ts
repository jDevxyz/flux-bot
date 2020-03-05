import winston, {Logger, transports, format, createLogger} from "winston"
import {EventEmitter} from "events"
import chalk from "chalk";

export class LogWrapper extends EventEmitter
{
    logger: Logger;
    public defaultLogLevel = "info";
    public customColor = {
        trace: "white",
        debug: "green",
        info: "blue",
        warn: "yellow",
        crit: "red",
        fatal: "red"
    };
    constructor(console: boolean = true)
    {
        super();
        this.logger = createLogger({
            level: this.defaultLogLevel,
            format: format.combine(
                format.prettyPrint(),
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            ),
            defaultMeta: { service: 'flux-bot' },
            transports: [
                new transports.File({ filename: 'error.log', level: 'error' }),
                new transports.File({ filename: 'logging.log' })
            ]
        });

        let date = new Date().toISOString();
        const mconst = {
            border1: chalk.blue("["),
            border2: chalk.blue("]")
        };
        if (console) this.logger.add(new transports.Console({
            format: format.combine(
                format.printf(function (info) {
                    const { level, message, stack } = info;
                    const prefix = `${mconst.border1}${date}${mconst.border2}-${mconst.border1}${level}${mconst.border2}: `;
                    if (level === "warn" || level === "error" || level === "crit") return prefix + stack;
                    return prefix + JSON.stringify(message, null, 4)
                }),
                format.align(),
                format.colorize({ all: true })
            )
        }))
    }

    protected getLogger()
    {
        return this.logger
    }
}
