import winston from "winston";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

let logger: winston.Logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.splat(),
                winston.format.simple()
            ),
            level: process.env["ENV"] === "PROD" ? "error" : "debug"
        }),
        new (winston.transports.File)({
            format: winston.format.combine(
                winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                winston.format.json()
            ),
            filename: "./log/debug.log",
            level: "debug"
        }),
        new (winston.transports.File)({
            format: winston.format.combine(
                winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                winston.format.json()
            ),
            filename: "./log/error.log",
            level: "error"
        }),    ]
});

if (process.env["ENV"] === "DEV") {
    logger.debug("Dev environment - Logging initialized at debug level");
}
if (process.env["ENV"] === "PROD") {
    logger.info("Production environment");
}

export default logger;