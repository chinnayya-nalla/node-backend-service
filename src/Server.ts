import express from 'express';
import { AppConfig } from './config/AppConfig';
import Logger from './helpers/Logger';
import Router from './Router';

const app = express();
const router = new Router(app);

app.listen(
    AppConfig.PORT_NUMBER,
    () => {
        Logger.info("It's alive on %s", AppConfig.PORT_NUMBER);
        Logger.info("Application Name %s", AppConfig.APPLICATION_NAME);
        Logger.info("Environment Name %s", AppConfig.ENVIRONMENT_NAME);
    }
)