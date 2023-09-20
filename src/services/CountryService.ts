import { CountryModel } from "models/CountryModel";
import { dataSource } from "../config/KnexConfig";

class CountryService {

    public countries(countryCode: String) {
        return new Promise((resolve, reject) => {
            dataSource.select().where((builder) => {
                if(countryCode != null && countryCode != undefined) {
                    builder.where('country_code', countryCode);
                }
            }).from('COUNTRY').then(results => {
                let countries : CountryModel[] = [];
                results.forEach((country) => {
                    let countryModel = {} as CountryModel;
                    countryModel.countryCode = country['COUNTRY_CODE'];
                    countryModel.countryName = country['COUNTRY_NAME'];
                    countryModel.currencyCode = country['CURRENCY_CODE'];
                    countryModel.taxType = country['TAX_TYPE'];
                    countryModel.callingCode = country['CALLING_CODE'];
                    countryModel.postalCodePattern = country['POSTAL_CODE_PATTERN'];
                    countryModel.contactNumberPattern = country['CONTACT_NUMBER_PATTERN'];
                    countries.push(countryModel);
                })
                resolve(countries);
            }).catch(error => {
                reject(error);
            })
        })

    }

}

export default new CountryService();