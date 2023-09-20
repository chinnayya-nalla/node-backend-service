export class AppConfig {

    public static APPLICATION_NAME = "Node Express Application with Typescript";
    public static PORT_NUMBER = process.env.PORT_NUMBER || 9999;
    public static ENVIRONMENT_NAME = process.env.ENVIRONMENT_NAME || 'Local';
    public static APPLICATION_LOG_FILE_NAME = 'application.log';

}