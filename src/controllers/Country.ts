import Logger from "../helpers/Logger";

class Country {

    async countries(request: any, response: any) {
        Logger.info('Invoking Country API');
        response.status(200).send({
            countryCode: "IN",
            countryName: "India"
        })
    }

}

export default new Country();