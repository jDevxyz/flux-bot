import winston from "winston"

export class LogWrapper extends winston.loggers
{
    constructor()
    {
        super({
            transports: [
                new winston.transports.File(),
                new winston.transports.Console()
            ],
            exitOnError: false,
        });

    }

}
