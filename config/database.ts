import { Pool, QueryConfig, QueryResult } from 'pg';
import { Service } from 'typedi';

@Service()
class Database {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'thinhtd2109',
            host: 'ep-old-snowflake-877762.ap-southeast-1.aws.neon.tech',
            database: 'neondb',
            password: 'lZYL7PBvD9fg',
            port: 5432,
        });

        this.pool.on('error', (err: Error) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        });
    }

    query(query: QueryConfig): Promise<QueryResult> {
        return this.pool.query(query);
    }

    close(): Promise<void> {
        return this.pool.end();
    }
}

export default Database;
