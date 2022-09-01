import {DATABASEURL} from '../environmentVariable';
import pg from "pg";

const { Pool } = pg;
export const connection = new Pool({
	connectionString: DATABASEURL()
});