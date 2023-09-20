import { CountryModel } from "models/CountryModel";
import { dataSource } from "../config/KnexConfig";
class CountryService {

    public async countries(countryCode: String) {
        let countries = [];
        countries = await dataSource.select().from('COUNTRY');
        return countries;
    }

}

export default new CountryService();