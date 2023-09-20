import countryService from '../services/CountryService'
class CountryController {

    async countries(request: any, response: any) {
        let countryCode = request.query.countryCode;
        try {
            response.status(200).send(await countryService.countries(countryCode));
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