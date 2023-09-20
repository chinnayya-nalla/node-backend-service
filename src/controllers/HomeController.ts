import { AppConfig } from "../config/AppConfig";

class HomeController {

    async info(request: any, response: any) {
        response.status(200).send({
            applicationName: AppConfig.APPLICATION_NAME,
            environmentName: AppConfig.ENVIRONMENT_NAME
        })
    }

}

export default new HomeController();