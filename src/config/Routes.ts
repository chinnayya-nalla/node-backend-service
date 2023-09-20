import countryRoutes from "../routes/CountryRoute";
import homeRoutes from "../routes/HomeRoute";


const routes = [ countryRoutes, homeRoutes ];

class Routes { 

    public configuredRoutes = new Map<String, any>();

    constructor() {
        for(const routeIndex in routes) {
            for(const route in routes[routeIndex]) {
                const routeDetail = routes[routeIndex][route];
                this.configuredRoutes.set(routeDetail.name, routeDetail);
            }
        }
    }
    
}

export default new Routes();