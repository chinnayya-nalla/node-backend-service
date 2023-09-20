import countryRoutes from "../routes/Country";

const routes = [ countryRoutes ];

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