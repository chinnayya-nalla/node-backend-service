import countryService from '../services/CountryService'
class CountryController {

    async countries(request: any, response: any) {
        let countryCode = request.query.countryCode;
        const countries = await countryService.countries(countryCode);
        console.log(countries);
        response.status(200).send(countries);            
    }

    async countryByCountryCode(request: any, response: any) {
        response.status(200).send({
            countryCode: "IN",
            countryName: "India"
        })
    }

}

export default new CountryController();