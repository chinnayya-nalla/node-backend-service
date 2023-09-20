import { readFileSync } from "fs";
import { Knex } from "knex";
import papaparse from "papaparse";

exports.seed = async function loadCountries(knex: Knex) {
    
    var file = readFileSync('db/data/countries.csv', "utf8");
    var content = papaparse.parse(file, {
        header: true
    });

    var countries : any[] = [];
    let data = content.data;
    data.forEach(function (country: any) {
        countries.push(
        { 
            COUNTRY_CODE: country.COUNTRY_CODE, 
            COUNTRY_NAME: country.COUNTRY_NAME, 
            CURRENCY_CODE: country.CURRENCY_CODE,
            TAX_TYPE: country.TAX_TYPE,
            CALLING_CODE: country.CALLING_CODE,
            POSTAL_CODE_PATTERN: country.POSTAL_CODE_PATTERN,
            CONTACT_NUMBER_PATTERN: country.CONTACT_NUMBER_PATTERN
        }
        );
    });

    await knex('COUNTRY').insert(countries);
    

}