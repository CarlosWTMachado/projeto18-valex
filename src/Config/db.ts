import {DATABASEURL} from '../environmentVariable';
import pg from "pg";

const { Pool } = pg;
const connection = new Pool({
	connectionString: DATABASEURL()
});
export default connection;