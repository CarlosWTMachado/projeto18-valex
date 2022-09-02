import dotenv from "dotenv";
dotenv.config();

export const APPLICATIONPORT = () => Number(process.env.PORT) || 5000;
export const DATABASEURL = () => process.env.DATABASE_URL;
export const CRYPTRKEY = () => process.env.CRYPTR_KEY || "";