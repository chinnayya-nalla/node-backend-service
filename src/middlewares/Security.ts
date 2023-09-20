import { Application } from "express";
import Helmet from "helmet";
import Cors from "cors";

class Security {

    constructor(private application: Application) {

        application.use(Helmet());

        application.use(Cors());

    }

}

export default Security;