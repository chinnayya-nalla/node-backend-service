import Routes from "./config/Routes";
import { Application } from "express";
import Logger from "./helpers/Logger";

class Router {

    constructor(private app: Application) {
        
        Routes.configuredRoutes.forEach((route: any, routeName: string) => {
            
            const middlewares = route.middlewares || [];

            switch (route.method) {

                case 'GET':
                    app.get(route.path, [...middlewares], route.controller);
                    break;
                case 'POST':
                    app.post(route.path, [...middlewares], route.controller);
                    break;
                case 'PUT':
                    app.put(route.path, [...middlewares], route.controller);
                    break;
                case 'DELETE':
                    app.delete(route.path, [...middlewares], route.controller);
                    break;
                default:    
                    Logger.info(`In Correct Method Name - ${route.method} Configured for path ${route.path}`);
            }

        })

    }

}

export default Router;