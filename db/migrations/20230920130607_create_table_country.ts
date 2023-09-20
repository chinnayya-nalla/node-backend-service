import knex, { Knex } from 'knex';

export async function up (knex: Knex) {

    await knex.schema.hasTable("COUNTRY").then(function(exists) {
        if (!exists) {
            return knex.schema.createTable("COUNTRY", (table) => {
                table.increments("ID").primary();
                table.string("COUNTRY_CODE", 2).unique().notNullable();
                table.string("COUNTRY_NAME", 50).notNullable();
                table.string("CURRENCY_CODE", 3);
                table.string("TAX_TYPE", 3);
                table.string("CALLING_CODE", 5);
                table.string("POSTAL_CODE_PATTERN", 100);
                table.string("CONTACT_NUMBER_PATTERN", 100);
            })
        }
    });

}

export function down (knex: Knex) {
    return knex.schema.dropTableIfExists("COUNTRY");
};