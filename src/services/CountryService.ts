import { dataSource } from "../config/KnexConfig";
class CountryService {

    public countries(countryCode: String) : any[] {
        let countries : any[];
        dataSource.select().from('COUNTRY').then(result => countries = result);
        return countries;
    }

}

export default new CountryService();