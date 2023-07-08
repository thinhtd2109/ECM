import { Pool, QueryResult } from 'pg';
import { Service } from 'typedi';
import { FilterOptions } from '../model/common.dto';
import _ from 'lodash';

@Service()
class Database {
    private pool: Pool;
    constructor() {
        this.pool = new Pool({
            ssl: true,
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: 5432,
        });

        this.pool.on('error', (err: Error) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        });
    }

    async pool_query(query: string): Promise<QueryResult> {
        const connection = await this.pool.connect();
        return connection.query(query)
    }

    async queryWithFilter(table: string, filters: FilterOptions[]): Promise<any[]> {
        const orFilterClauses = filters
            .filter(filter => filter.operator === 'OR')
            .map(filter => `${filter.columnName} = '${filter.value}'`);

        const andFilterClauses = filters
            .filter(filter => filter.operator !== 'OR')
            .map(filter => `${filter.columnName} = '${filter.value}'`);

        let queryText = `SELECT * FROM ${table}`;

        if (orFilterClauses.length > 0 || andFilterClauses.length > 0) {
            queryText += ' WHERE ';

            if (orFilterClauses.length > 0) {
                queryText += '(' + orFilterClauses.join(' OR ') + ')';
            }

            if (andFilterClauses.length > 0) {
                if (orFilterClauses.length > 0) {
                    queryText += ' AND ';
                }
                queryText += andFilterClauses.join(' AND ');

            }
        }

        try {
            const client = await this.pool.connect();
            const result = await client.query(queryText);
            client.release();

            return result.rows;
        } catch (error) {
            throw new Error(`Error executing query: ${error}`);
        }
    }


    close(): Promise<void> {
        return this.pool.end();
    }
}

export default Database;
