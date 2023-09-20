
class Country {

    async countries(request: any, response: any) {
        response.status(200).send({
            countryCode: "IN",
            countryName: "India"
        })
    }

}

export default new Country();