export class DataBaseConfig {

    public static DATABASE_HOST = process.env.DATABASE_HOST || '127.0.0.1';
    public static DATABASE_USER = process.env.DATABASE_USER || 'root';
    public static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'P@ssw0rd';
    public static DATABASE_NAME = process.env.DATABASE_PASSWORD || 'node_js';
    public static DATABASE_DIALECT = process.env.DATABASE_DIALECT || 'mysql';

}