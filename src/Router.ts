import Routes from "./config/Routes";
import { Application } from "express";
import Logger from "./utils/Logger";

class Router {

    constructor(private application: Application) {
        
        Routes.configuredRoutes.forEach((route: any, routeName: string) => {
            
            const middlewares = route.middlewares || [];

            switch (route.method) {

                case 'GET':
                    application.get(route.path, [...middlewares], route.controller);
                    break;
                case 'POST':
                    application.post(route.path, [...middlewares], route.controller);
                    break;
                case 'PUT':
                    application.put(route.path, [...middlewares], route.controller);
                    break;
                case 'DELETE':
                    application.delete(route.path, [...middlewares], route.controller);
                    break;
                default:    
                    Logger.info(`In Correct Method Name - ${route.method} Configured for path ${route.path}`);
            }

        })

    }

}

export default Router;