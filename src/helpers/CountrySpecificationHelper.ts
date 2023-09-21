import { Knex } from "knex";
import { CountrySearchRepresentation } from "models/CountrySearchRepresentation";

class CountrySpecificationHelper {

    constructCountrySearchSpecification(builder: Knex.QueryBuilder<any, unknown[]>, countrySearchRepresentation: CountrySearchRepresentation) {
        
        if(countrySearchRepresentation.countryCode) {
            builder.where('country_code', countrySearchRepresentation.countryCode);
        }

        if(countrySearchRepresentation.countryName) {
            builder.where('country_name', countrySearchRepresentation.countryName);
        }

        if(countrySearchRepresentation.searchString) {
            builder.whereILike('country_code', `%${countrySearchRepresentation.searchString}%`);
            builder.orWhereILike('country_name', `%${countrySearchRepresentation.searchString}%`)
        }

        return builder;
    }
    


}

export default new CountrySpecificationHelper();