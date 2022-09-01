import dotenv from "dotenv";
dotenv.config();

export const APPLICATIONPORT = () => Number(process.env.PORT);
export const DATABASEURL = () => process.env.DATABASE_URL;