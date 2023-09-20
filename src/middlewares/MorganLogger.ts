import { Application } from "express";
import morgan from 'morgan';

class MorganLogger {

    constructor(private application: Application) {

        const loggingFormat = '[:date[web]] [:method] [:url] [:status] [:remote-addr] [:response-time ms]';
        application.use(morgan(loggingFormat));

    }

}

export default MorganLogger;