import knex from 'knex'
import { getDbPath } from './helpers/getDbPath'

const db = knex({
	client: "sqlite",
	connection: {
		filename: getDbPath()
	}
});

export default db
