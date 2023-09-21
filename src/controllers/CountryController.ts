import countryService from '../services/CountryService';
import { CountrySearchRepresentation } from '../models/CountrySearchRepresentation';

class CountryController {

    async countries(request: any, response: any) {

        let countrySearchRepresentation = {} as CountrySearchRepresentation;
        countrySearchRepresentation.countryCode = request.query.countryCode;
        countrySearchRepresentation.countryName = request.query.countryName;
        countrySearchRepresentation.searchString = request.query.searchString;

        try {
            response.status(200).send(await countryService.countries(countrySearchRepresentation));
        } catch(error) {
            response.status(500);
        }          
    }

    async countryByCountryCode(request: any, response: any) {
        response.status(200).send({
            countryCode: "IN",
            countryName: "India"
        })
    }

}

export default new CountryController();