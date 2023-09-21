import express from 'express';
import { AppConfig } from './config/AppConfig';
import Logger from './utils/Logger';
import Router from './Router';
import MorganLogger from './middlewares/MorganLogger';
import BodyParser from './middlewares/BodyParser';
import Security from './middlewares/Security';

const application = express();

// Registering Middlewares
new BodyParser(application);
new Security(application);
new MorganLogger(application);
new Router(application);

application.listen(
    AppConfig.PORT_NUMBER,
    () => {
        Logger.info("It's alive on %s", AppConfig.PORT_NUMBER);
        Logger.info("Application Name %s", AppConfig.APPLICATION_NAME);
        Logger.info("Environment Name %s", AppConfig.ENVIRONMENT_NAME);
    }
)