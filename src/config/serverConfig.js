import dotenv from 'dotenv';

dotenv.config();

export const DB_URI = process.env.DB_URI
export const JWT_ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const JWT_ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
export const JWT_REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const JWT_REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;
