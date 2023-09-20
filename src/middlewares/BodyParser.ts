import bodyParser from "body-parser";
import { Application } from "express";

class BodyParser {

    constructor(private application: Application) {
        application.use(bodyParser.json());
    }

}

export default BodyParser;