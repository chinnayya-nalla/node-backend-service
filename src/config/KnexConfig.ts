import knex from 'knex';
import { DataBaseConfig } from './DataBaseConfig'

const config = {

    client: DataBaseConfig.DATABASE_DIALECT,
    connection: {
        host:     DataBaseConfig.DATABASE_HOST,
        database: DataBaseConfig.DATABASE_NAME,
        user:     DataBaseConfig.DATABASE_USER,
        password: DataBaseConfig.DATABASE_PASSWORD
    },
    pool: {
        min: 2,
        max: 10
    },
    seeds: {
        directory: './db/seeds'
    },
    migrations: {
        directory: "./db/migrations",
        tableName: 'knex_migrations'
    }

}

const dataSource = knex(config);

export { config, dataSource };