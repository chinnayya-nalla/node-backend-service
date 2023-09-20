import { format, createLogger, transports } from 'winston';
import { AppConfig } from '../config/AppConfig';

const loggingFormat = format.combine(
    format.splat(),
    format.simple(),
    format.align(),
    format.timestamp(),
    format.printf(info => `[${info.timestamp}] [${info.level}] [${info.message}]`)
);

const logger = createLogger({
    level: 'info',
    format: loggingFormat,
    transports: [
        new transports.Console(),
        new transports.File({ filename: AppConfig.APPLICATION_LOG_FILE_NAME })
    ]
});


export default logger