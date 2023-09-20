
class CountryController {

    async countries(request: any, response: any) {
        response.status(200).send({
            countryCode: "IN",
            countryName: "India"
        })
    }

    async countryByCountryCode(request: any, response: any) {
        response.status(200).send({
            countryCode: "IN",
            countryName: "India"
        })
    }

}

export default new CountryController();