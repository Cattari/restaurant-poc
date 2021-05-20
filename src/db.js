import knex from 'knex'
import { getDbPath } from './helpers/getDbPath'

const db = knex({
	client: "sqlite",
	connection: {
		filename: getDbPath()
	},
	useNullAsDefault: true,
	asar: false,
});

export default db
